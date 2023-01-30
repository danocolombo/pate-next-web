import React, { useContext } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '/src/pateGraphQL/queries';
import REMOTE_DATA from '../../../data/user.json';
import { printObject } from '../../../utils/helpers';

async function handler(req, res) {
    const data = req.body;
    const { username, password } = data;

    let cognitoUser = {};
    let profile = {};

    const DB_ENDPOINT = `${process.env.PATE_DDB_ENDPOINT}/users`;
    await Auth.signIn(username, password)
        .then((user) => {
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
                Auth.completeNewPassword(
                    username, // the Cognito User Object
                    password,
                    []
                )

                    .then((user) => {
                        // at this time the user is logged in if no MFA required
                        cognitoUser = user;
                    })
                    .catch((e) => {
                        const alertPayload = {
                            msg: 'Authentication failed. Please check your credentials',
                            alertType: 'danger',
                        };
                        res.status(400).json({ error: alertPayload });
                    });
            } else {
                // the user is good to go....
                let currentUserInfo = {};
                let currentSession = {};
                let userProfile = {};
                let userId = '';
                async function getResultantCognitoData() {
                    await Auth.currentUserInfo().then((u) => {
                        currentUserInfo = u;
                        userId = u.attributes.sub;
                    });
                    await Auth.currentSession().then((data) => {
                        currentSession = data;
                    });
                    const variables = {
                        id: userId,
                    };
                    API.graphql(
                        graphqlOperation(queries.getProfileBySub, variables)
                    )
                        .then((gqlProfile) => {
                            //*  This will be an array, need to get [0]
                            if (gqlProfile?.data?.listUsers?.items.length > 0) {
                                printObject(
                                    'L:60-->gqlProfile: ',
                                    gqlProfile?.data?.listUsers?.items[0]
                                );
                                userProfile =
                                    gqlProfile.data.listUsers.items[0];
                            } else {
                                userProfile = {};
                            }
                            res.status(200).json({
                                data: {
                                    currentUserInfo: currentUserInfo,
                                    currentSession: currentSession,
                                    userProfile: userProfile,
                                },
                            });
                        })
                        .catch((error) => {
                            printObject(
                                'L:69--> error getting division events from graphql',
                                error
                            );
                            userProfile = {};
                        });

                    // async function getUserProfile(id) {
                    //     try {
                    //         await fetch(
                    //             'https://j7qty6ijwg.execute-api.us-east-1.amazonaws.com/QA/users',
                    //             {
                    //                 method: 'POST',
                    //                 body: JSON.stringify({
                    //                     operation: 'getUser',
                    //                     payload: {
                    //                         uid: id,
                    //                     },
                    //                 }),
                    //                 headers: {
                    //                     'Content-type':
                    //                         'application/json; charset=UTF-8',
                    //                 },
                    //             }
                    //         )
                    //             .then((response) => response.json())
                    //             .then((data) => {
                    //                 userProfile = data?.body?.Items[0];

                    //                 res.status(200).json({
                    //                     data: {
                    //                         currentUserInfo: currentUserInfo,
                    //                         currentSession: currentSession,
                    //                         userProfile: userProfile,
                    //                     },
                    //                 });
                    //             });
                    //     } catch (error) {
                    //         printObject('L79--> DDB error:\n', error);
                    //         res.status(400).json({
                    //             data: {
                    //                 currentUserInfo: currentUserInfo,
                    //                 currentSession: currentSession,
                    //                 userProfile: {
                    //                     error: error,
                    //                 },
                    //             },
                    //         });
                    //     }

                    //     const returnValue = { uid: id };
                    //     return returnValue;
                    // }
                    // userProfile = await getUserProfile(userId);
                }
                getResultantCognitoData();

                // now get the user profile.
            }
        })
        .catch((e) => {
            switch (e.code) {
                case 'UserNotFoundException':
                    alertPayload = {
                        msg: e.message,
                        alertType: 'danger',
                    };
                    break;
                case 'PasswordResetRequiredException':
                    alertPayload = {
                        msg: e.message,
                        alertType: 'danger',
                    };
                    break;
                default:
                    alertPayload = {
                        msg: 'Signin error: [' + e.message + ']',
                        alertType: 'danger',
                    };
                    break;
            }
            // setAlert(alertPayload);
            res.status(400).json({ error: alertPayload });
        });
    return;
}
export default handler;

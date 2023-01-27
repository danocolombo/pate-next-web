import { Auth } from 'aws-amplify';

import REMOTE_DATA from '../../../data/user.json';
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
                async function getResultantCognitoData() {
                    await Auth.currentUserInfo().then((u) => {
                        currentUserInfo = u;
                    });
                    await Auth.currentSession().then((data) => {
                        currentSession = data;
                    });
                    res.status(200).json({
                        data: {
                            currentUserInfo: currentUserInfo,
                            currentSession: currentSession,
                        },
                    });
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

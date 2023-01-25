/*eslint-disable*/
import React, { useContext, useState, useRef } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import Email from '@mui/icons-material/Email';
import Favorite from '@mui/icons-material/Favorite';
import Face from '@mui/icons-material/Face';
// core components
import Header from '/components/Header/PateHeader.js';
import HeaderLinks from '/components/Header/PateHeaderLinks.js';
import Footer from '/components/Footer/Footer.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CardHeader from '/components/Card/CardHeader.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import { Auth } from 'aws-amplify';
import loginPageStyle from '/styles/jss/nextjs-material-pate/pages/loginPageStyle.js';
import PateFooter from '../../pages-sections/footer/PateFooter';
import Link from 'next/link';
import PateSystemContext from '../../store/pateSystem-context';
import SessionContext from '../../store/session-context';
import { useSessionContext } from '../../store/session-context';
const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
    const pateCTX = useContext(PateSystemContext);
    const sessionCTX = useContext(SessionContext);
    const { setCurrentSession, setCurrentUserInfo } = useSessionContext();
    console.log('Pate Version:', pateCTX.pateVersion);
    console.log('JWT Token:', pateCTX.jwtToken);
    const inputUsernameRef = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    function loginTestHandler() {
        console.log('TEST-TEST-TEST');
        console.log('ref:', inputUsernameRef.current);
        console.log('username:', username);
        console.log('password', password);
    }
    async function loginHandler() {
        let alertPayload = {};
        try {
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
                                console.log(user);
                            })
                            .catch((e) => {
                                const alertPayload = {
                                    msg: 'Authentication failed. Please check your credentials',
                                    alertType: 'danger',
                                };
                                // setAlert(alertPayload);
                                console.log(alertPayload);
                                return;
                            });
                    } else {
                        // the user is good to go....
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
                    console.log(alertPayload);
                    return;
                });
            let currentUserInfo = {};
            let currentSession = {};
            await Auth.currentUserInfo().then((u) => {
                currentUserInfo = u;
            });
            await Auth.currentSession().then((data) => {
                currentSession = data;
            });
            // we will get true if user is registered or false if not
            //* +++ WE GOT DETAILS +++
            console.log('currentUserInfo:\n', currentUserInfo);
            setCurrentUserInfo(currentUserInfo);
            console.log('currentSession:\n', currentSession);
            pateCTX.setToken(currentSession.idToken.jwtToken);
            setCurrentSession(currentSession);
            // const userIsRegistered = await saveUser(
            //     currentUserInfo,
            //     currentSession
            // );
            // await getRegistrations(currentUserInfo.attributes.sub);
            //generic cleanup
            // await clearTempRegistration();
            //let user know if they need to complete registration
            // console.log('REGISTERED: ' + userIsRegistered);
            // !userIsRegistered ? console.log('NOPE') : console.log('YEP');

            // clearSpinner();
            // userIsRegistered ? history.push('/') : history.push('/profile');
        } catch (error) {
            switch (error) {
                case 'No current user':
                    alertPayload = {
                        msg: 'Authentication failed. Please check your credentials',
                        alertType: 'danger',
                    };
                    break;

                default:
                    alertPayload = {
                        msg: 'Unknown error signing in.[' + error + ']',
                        alertType: 'danger',
                    };
                    break;
            }
            // setAlert(alertPayload);
            console.log(alertPayload);
            // clearSpinner();
        }
    }
    const handleChange = (e) => {
        console.log('e:', e);
        console.log('username/before', username);
        const { value, id } = e.target;

        switch (id) {
            case 'username':
                setUsername(value);
                inputUsernameRef.current = value;
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
        console.log('username/after', username);
    };
    function signOutHandler() {
        signOut();
        pateCTX.setToken(null);
        Router.push('/');
    }
    return (
        <div>
            <Header
                absolute
                color='transparent'
                brand='P8 Rally'
                links={<HeaderLinks dropdownHoverColor='info' />}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url('/img/background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}
            >
                <div className={classes.container}>
                    <GridContainer justifyContent='center'>
                        <GridItem xs={12} sm={8} md={4}>
                            <Card>
                                <form className={classes.form}>
                                    <CardHeader
                                        color='primary'
                                        signup
                                        className={classes.cardHeader}
                                    >
                                        <h4 className={classes.cardTitle}>
                                            Login
                                        </h4>
                                    </CardHeader>

                                    <CardBody signup>
                                        <CustomInput
                                            id='username'
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                placeholder: 'Username',
                                                type: 'text',
                                                value: username,
                                                defaultValue: '',
                                                onChange: handleChange,
                                            }}
                                        />
                                        <CustomInput
                                            id='password'
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                placeholder: 'Password',
                                                type: 'password',
                                                defaultValue: '',
                                                value: password,
                                                onChange: handleChange,
                                                autoComplete: 'off',
                                            }}
                                        />
                                    </CardBody>
                                    <div className={classes.textCenter}>
                                        <Button
                                            round
                                            color='secondary'
                                            onClick={() => loginHandler()}
                                        >
                                            Sign In
                                        </Button>
                                    </div>
                                    <div className={classes.textCenter}>
                                        <Button
                                            round
                                            color='secondary'
                                            onClick={() => signOutHandler()}
                                        >
                                            Sign-Out
                                        </Button>
                                    </div>
                                    <div className={classes.textCenter}>
                                        <Button
                                            simple
                                            color='primary'
                                            size='lg'
                                        >
                                            <Link href='/signup'>
                                                <a
                                                    className={{
                                                        color: 'black',
                                                    }}
                                                >
                                                    Don't have an account?
                                                    Signup now
                                                </a>
                                            </Link>
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer className={classes.footer} content={<PateFooter />} />
            </div>
        </div>
    );
}

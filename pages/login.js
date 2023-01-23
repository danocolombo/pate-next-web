/*eslint-disable*/
import React, { useContext } from 'react';
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

import loginPageStyle from '/styles/jss/nextjs-material-pate/pages/loginPageStyle.js';
import PateFooter from '../pages-sections/footer/PateFooter';
import Link from 'next/link';
import PateSystemContext from '../store/pateSystem-context';

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
    const pateCTX = useContext(PateSystemContext);
    console.log('Pate Version:', pateCTX.pateVersion);
    console.log('JWT Token:', pateCTX.jwtToken);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    const loginHandler = () => {
        console.log('PRESSED');
        pateCTX.setToken('ABC');
    };
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
                                            }}
                                        />
                                        <CustomInput
                                            id='pass'
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                placeholder: 'Password',
                                                type: 'password',

                                                autoComplete: 'off',
                                            }}
                                        />
                                    </CardBody>
                                    <div className={classes.textCenter}>
                                        <Button
                                            round
                                            color='tertiary'
                                            onClick={() => loginHandler()}
                                        >
                                            LOGIN
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
                                                    classname={{
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

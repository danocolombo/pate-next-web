/*eslint-disable*/
import React from 'react';
import Link from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import Timeline from '@mui/icons-material/Timeline';
import Code from '@mui/icons-material/Code';
import Group from '@mui/icons-material/Group';
import Face from '@mui/icons-material/Face';
import Email from '@mui/icons-material/Email';
import Check from '@mui/icons-material/Check';
import Favorite from '@mui/icons-material/Favorite';
// core components
import Header from '/components/Header/PateHeader.js';
import HeaderLinks from '/components/Header/PateHeaderLinks.js';
import Footer from '/components/Footer/Footer.js';
import PateFooter from '../../pages-sections/footer/PateFooter';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import InfoArea from '/components/InfoArea/InfoArea.js';
import CustomInput from '/components/CustomInput/CustomInput.js';

import signupPageStyle from '/styles/jss/nextjs-material-pate/pages/signupPageStyle.js';

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
    const [checked, setChecked] = React.useState([1]);
    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                absolute
                color='transparent'
                brand='P8 Rallies'
                links={<HeaderLinks dropdownHoverColor='info' />}
                {...rest}
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
                        <GridItem xs={12} sm={10} md={10}>
                            <Card className={classes.cardSignup}>
                                <h2 className={classes.cardTitle}>Signup!!</h2>
                                <CardBody>
                                    <GridContainer justifyContent='center'>
                                        <GridItem xs={12} sm={5} md={5}>
                                            <form className={classes.form}>
                                                <CustomInput
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className:
                                                            classes.customFormControlClasses,
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position='start'
                                                                className={
                                                                    classes.inputAdornment
                                                                }
                                                            >
                                                                <Face
                                                                    className={
                                                                        classes.inputAdornmentIcon
                                                                    }
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: 'Username',
                                                    }}
                                                />
                                                <CustomInput
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className:
                                                            classes.customFormControlClasses,
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position='start'
                                                                className={
                                                                    classes.inputAdornment
                                                                }
                                                            >
                                                                <Email
                                                                    className={
                                                                        classes.inputAdornmentIcon
                                                                    }
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: 'Email...',
                                                    }}
                                                />

                                                <CustomInput
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className:
                                                            classes.customFormControlClasses,
                                                    }}
                                                    labelText='Password'
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position='start'
                                                                className={
                                                                    classes.inputAdornment
                                                                }
                                                            >
                                                                <Icon
                                                                    className={
                                                                        classes.inputAdornmentIcon
                                                                    }
                                                                >
                                                                    lock_outline
                                                                </Icon>
                                                            </InputAdornment>
                                                        ),
                                                        placeholder:
                                                            '**********',
                                                    }}
                                                />

                                                <CustomInput
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className:
                                                            classes.customFormControlClasses,
                                                    }}
                                                    labelText='Repeat Password'
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position='start'
                                                                className={
                                                                    classes.inputAdornment
                                                                }
                                                            >
                                                                <Icon
                                                                    className={
                                                                        classes.inputAdornmentIcon
                                                                    }
                                                                >
                                                                    lock_outline
                                                                </Icon>
                                                            </InputAdornment>
                                                        ),
                                                        placeholder:
                                                            '**********',
                                                    }}
                                                />
                                                <FormControlLabel
                                                    classes={{
                                                        label: classes.label,
                                                    }}
                                                    control={
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() =>
                                                                handleToggle(1)
                                                            }
                                                            checkedIcon={
                                                                <Check
                                                                    className={
                                                                        classes.checkedIcon
                                                                    }
                                                                />
                                                            }
                                                            icon={
                                                                <Check
                                                                    className={
                                                                        classes.uncheckedIcon
                                                                    }
                                                                />
                                                            }
                                                            classes={{
                                                                checked:
                                                                    classes.checked,
                                                                root: classes.checkRoot,
                                                            }}
                                                            checked={
                                                                checked.indexOf(
                                                                    1
                                                                ) !== -1
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                    }
                                                    label={
                                                        <span>
                                                            I agree to the{' '}
                                                            <a href='#pablo'>
                                                                terms and
                                                                conditions
                                                            </a>
                                                            .
                                                        </span>
                                                    }
                                                />
                                                <div
                                                    className={
                                                        classes.textCenter
                                                    }
                                                >
                                                    <Button
                                                        round
                                                        color='primary'
                                                    >
                                                        Get started
                                                    </Button>
                                                </div>
                                                <div
                                                    className={
                                                        classes.textCenter
                                                    }
                                                >
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
                                                                Have you
                                                                signed-up and
                                                                need to confirm
                                                                your account?
                                                                Click here
                                                            </a>
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </form>
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer content={<PateFooter />} />
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import Link from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Icon from '@mui/material/Icon';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import Face from '@mui/icons-material/Face';
import Email from '@mui/icons-material/Email';
import Check from '@mui/icons-material/Check';

import profilePageStyle from '/styles/jss/nextjs-material-pate/pages/profileSectionSections/profileFormStyle.js';

const useStyles = makeStyles(profilePageStyle);
function ProfileForm(props) {
    const classes = useStyles();
    const [firstName, setFirstName] = useState(props.firstName || '');
    const [lastName, setLastName] = useState(props.lastName || '');
    const [phone, setPhone] = useState(props.phone || '');
    const [street, setStreet] = useState(props.street || '');
    const [city, setCity] = useState(props.city || '');
    const [stateProv, setStateProv] = useState(props.stateProv || '');
    const [postalCode, setPostalCode] = useState(props.postalCode || '');
    const handleStateProv = (event) => {
        setStateProv(event.target.value);
    };
    return (
        <div className={classes.container}>
            <GridContainer justifyContent='center'>
                <GridItem xs={12} sm={10} md={10}>
                    <Card className={classes.cardSignup}>
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
                                                id: 'firstName',
                                                placeholder: 'First name',
                                            }}
                                        />
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true,
                                                className:
                                                    classes.customFormControlClasses,
                                            }}
                                            inputProps={{
                                                id: 'lastName',
                                                placeholder: 'Last name',
                                            }}
                                        />
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true,
                                                className:
                                                    classes.customFormControlClasses,
                                            }}
                                            inputProps={{
                                                id: 'phoneNumber',
                                                placeholder: 'Phone number',
                                            }}
                                        />
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true,
                                                className:
                                                    classes.customFormControlClasses,
                                            }}
                                            inputProps={{
                                                id: 'street',
                                                placeholder: 'Street address',
                                            }}
                                        />
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true,
                                                className:
                                                    classes.customFormControlClasses,
                                            }}
                                            inputProps={{
                                                id: 'city',
                                                placeholder: 'City',
                                            }}
                                        />
                                        <Select
                                            MenuProps={{
                                                className: classes.selectMenu,
                                            }}
                                            classes={{
                                                select: classes.select,
                                            }}
                                            value={stateProv}
                                            onChange={handleStateProv}
                                            inputProps={{
                                                name: 'stateProv',
                                                id: 'stateProv',
                                            }}
                                        >
                                            <MenuItem
                                                disabled
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                }}
                                            >
                                                Single Select
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected:
                                                        classes.selectMenuItemSelected,
                                                }}
                                                value='2'
                                            >
                                                Paris
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected:
                                                        classes.selectMenuItemSelected,
                                                }}
                                                value='3'
                                            >
                                                Bucharest
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected:
                                                        classes.selectMenuItemSelected,
                                                }}
                                                value='4'
                                            >
                                                Rome
                                            </MenuItem>
                                        </Select>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true,
                                                className:
                                                    classes.customFormControlClasses,
                                            }}
                                            inputProps={{
                                                id: 'postalCode',
                                                placeholder: 'Postal code',
                                            }}
                                        />

                                        <div className={classes.textCenter}>
                                            <Button round color='primary'>
                                                Update
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
    );
}

export default ProfileForm;

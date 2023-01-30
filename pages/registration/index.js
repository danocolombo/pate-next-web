/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Icon from '@mui/material/Icon';
import { useUserContext } from '../../store/user-context';
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
import People from "@mui/icons-material/People";
import Footer from '/components/Footer/Footer.js';
import PateFooter from '../../pages-sections/footer/PateFooter';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import InfoArea from '/components/InfoArea/InfoArea.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import ServeOverview from '../../pages-sections/serve/ServeOverview';
import registrationPageStyle from '/styles/jss/nextjs-material-pate/pages/registrationPageStyle.js';
import ServeEventsCard from '../../pages-sections/serve/ServeEventsCard';
import SectionServeRallyList from '../../pages-sections/rallies/SectionServeRallyList';
const useStyles = makeStyles(registrationPageStyle);

import { printObject } from '../../utils/helpers';

export default function RegistrationPage({ ...rest }) {
    const { sessionToken, profile } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    
    const classes = useStyles();
    if (isLoading) {
        return <div>Loading...</div>;
    }
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
                <div className={classes.section}>
      <div className={classes.container}>
        
        <Card pricing>
            <CardBody pricing>
            <h1 style={{color: 'black'}}>Registration</h1> 
            <div>
                <div className={classes.rallyName}>
                    Northway Church
                </div>
                <div className={classes.rallyAddressWrapper}>
                <div className={classes.rallyAddress}>123 Main St.</div>
                </div>

            </div>


                      <h6
                        className={
                          classes.rallyAddress
                        }
                      >
                        SMALL COMPANY
                      </h6>
                      <div className={classes.iconWrapper}>
                        <People className={classes.iconInfo} />
                      </div>
                      <h3
                        className={
                          classes.cardTitle + " " + classes.marginTop30
                        }
                      >
                        $29
                      </h3>
                      <p className={classes.cardDescription}>
                        This is good if your company size is between 2 and 10
                        Persons.
                      </p>
                      <Button round color="info">
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
        </div>
                </div>
                <div className={classes.container}>
                    <div>Start Here...</div>
                </div>
                <Footer content={<PateFooter />} />
            </div>
        </div>
    );
}

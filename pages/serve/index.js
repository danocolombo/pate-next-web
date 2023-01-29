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
import servePageStyle from '/styles/jss/nextjs-material-pate/pages/servePageStyle.js';
import ServeEventsCard from '../../pages-sections/serve/ServeEventsCard';
const useStyles = makeStyles(servePageStyle);

import myRalliesData from '../../data/myRallies.json';
import upcomingStateRalliesData from '../../data/upcomingStateRallies.json';
import pastStateRalliesData from '../../data/pastStateRallies.json';
import { printObject } from '../../utils/helpers';

export default function ServePage({ ...rest }) {
    const { sessionToken } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [myRallies, setMyRallies] = useState([]);
    const [upcomingStateRallies, setUpcomingStateRallies] = useState([]);
    const [pastStateRallies, setPastStateRallies] = useState([]);

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
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    useEffect(() => {
        if (!sessionToken) {
            Router.back();
        }
    }, []);
    useEffect(() => {
        setIsLoading(true);
        printObject('USE_EFFECT:myRalliesData:\n', myRalliesData);
        setMyRallies(myRalliesData.body);
        setUpcomingStateRallies(upcomingStateRalliesData.body);
        setPastStateRallies(pastStateRalliesData.body);
        setIsLoading(false);
    }, []);
    printObject('SERVE_myRallies:\n', myRallies);
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
                <div className={classes.container}>
                    <GridContainer justifyContent='center'>
                        <GridItem xs={12} sm={10} md={10}>
                            <Card className={classes.cardServe}>
                                <h2 className={classes.cardTitle}>
                                    Principle 8 Service
                                </h2>
                                <CardBody>
                                    <ServeOverview />
                                </CardBody>
                                {myRallies && (
                                    <ServeEventsCard
                                        cardTitle='My Events'
                                        rallies={myRallies}
                                    />
                                )}
                                {upcomingStateRallies && (
                                    <ServeEventsCard
                                        cardTitle='Upcoming Events'
                                        rallies={upcomingStateRallies}
                                    />
                                )}
                                {pastStateRallies && (
                                    <ServeEventsCard
                                        cardTitle='Past Events'
                                        rallies={pastStateRallies}
                                    />
                                )}
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer content={<PateFooter />} />
            </div>
        </div>
    );
}

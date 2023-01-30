/*eslint-disable*/ import React, { useEffect } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '/src/pateGraphQL/queries';
import makeStyles from '@mui/styles/makeStyles';
// core components
import PateSystemContext from '/store/pateSystem-context';
import { useRallyContext } from '/store/rally-context';
import Header from '/components/Header/PateHeader.js';
import HeaderLinks from '/components/Header/PateHeaderLinks.js';
import Parallax from '/components/Parallax/Parallax.js';
import Footer from '/components/Footer/Footer.js';
import PateFooter from '../pages-sections/footer/PateFooter';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
// sections for this page
import SectionText from '/pages-sections/landing-intro/SectionText.js';
import SectionNewsletter from '../pages-sections/newsletterSection/SectionNewsletter';
import SectionRallyList from '../pages-sections/rallies/SectionRallyList';
import landingPageStyle from '/styles/jss/nextjs-material-pate/pages/blogPostPageStyle.js';

const useStyles = makeStyles(landingPageStyle);

import { printObject } from '../utils/helpers';
export default function BlogPostPage() {
    const pateCTX = useContext(PateSystemContext);
    const { setAvailableRallies, availableRallies } = useRallyContext();
    console.log('L:36->Pate Version: ', pateCTX.pateVersion);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    useEffect(() => {
        //      THIS NEEDS TO GET AVAILABLE EVENTS
        //      getDivisionEvents
        const variables = {
            id: 'fffedde6-5d5a-46f0-a3ac-882a350edc64',
            eq: 'approved',
            ge: '2023-01-28',
        };
        API.graphql(
            graphqlOperation(queries.getDivisionEventsByDateStatus, variables)
        )
            .then((divisionEvents) => {
                if (
                    divisionEvents?.data?.getDivision?.events.items.length > 0
                ) {
                    // printObject(
                    //     'L:54-->events: ',
                    //     divisionEvents?.data?.getDivision?.events.items
                    // );
                    setAvailableRallies(
                        divisionEvents.data.getDivision.events.items
                    );
                } else {
                    console.log('L:64--> NO EVENTS TO DISPLAY');
                }
            })
            .catch((error) => {
                printObject(
                    'L:69--> error getting division events from graphql',
                    error
                );
            });
    }, []);
    const classes = useStyles();
    return (
        <div>
            <Header
                brand='P8 Rallies'
                links={<HeaderLinks dropdownHoverColor='info' />}
                fixed
                color='transparent'
                changeColorOnScroll={{
                    height: 300,
                    color: 'info',
                }}
            />
            <Parallax image='/img/background.jpg' filter='dark'>
                <div className={classes.container}>
                    <GridContainer justifyContent='center'>
                        <GridItem md={8} className={classes.textCenter}>
                            <h1 className={classes.title}>
                                Principle 8 Rallies
                            </h1>
                            <h4 className={classes.subtitle}>
                                Engaging, encouraging and uniting Celebrate
                                Recovery ministries...
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            {availableRallies && (
                <div className={classes.main}>
                    <div className={classes.container}>
                        <SectionRallyList rallies={availableRallies} />
                    </div>
                </div>
            )}
            <div className={classes.main}>
                <div className={classes.container}>
                    <SectionText />
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.container}>
                    <SectionNewsletter />
                </div>
            </div>
            <Footer content={<PateFooter />} />
        </div>
    );
}

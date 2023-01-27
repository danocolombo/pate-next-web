/*eslint-disable*/ import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// @mui/icons-material
import FormatAlignLeft from '@mui/icons-material/FormatAlignLeft';
import Favorite from '@mui/icons-material/Favorite';
// core components
import PateSystemContext from '/store/pateSystem-context';
import Header from '/components/Header/PateHeader.js';
import HeaderLinks from '/components/Header/PateHeaderLinks.js';
import Parallax from '/components/Parallax/Parallax.js';
import Footer from '/components/Footer/Footer.js';
import PateFooter from '../pages-sections/footer/PateFooter';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
// sections for this page
import SectionText from '/pages-sections/landing-intro/SectionText.js';
import SectionNewsletter from '../pages-sections/newsletterSection/SectionNewsletter';
import SectionRallyList from '../pages-sections/rallies/SectionRallyList';
import landingPageStyle from '/styles/jss/nextjs-material-pate/pages/blogPostPageStyle.js';

const useStyles = makeStyles(landingPageStyle);

import rallies from '../data/event.json';
export default function BlogPostPage() {
    const pateCTX = useContext(PateSystemContext);
    console.log('Pate Version: ', pateCTX.pateVersion);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
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
            <div className={classes.main}>
                <div className={classes.container}>
                    <SectionRallyList rallies={rallies} />
                </div>
            </div>
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

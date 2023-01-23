import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Quote from '/components/Typography/Quote.js';
// core components

import sectionTextStyle from '/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js';

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
    const classes = useStyles();
    const imgClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );
    return (
        <div className={classes.section}>
            <GridContainer justifyContent='center'>
                <GridItem xs={12} sm={8} md={8}>
                    <h2 className={classes.title}>What is a P8 Rally?</h2>
                    <p>
                        Principle Eight, also known as P8, is reference to
                        principle eight of the Celebrate Recovery ministry.
                        <br />
                    </p>
                    <Quote
                        textClassName={classes.quoteText}
                        text='“Yield myself to God to be used to bring this Good News to others, both by may example and my words.”'
                    />
                    <p>
                        Celebrate Recovery P8 Rallies are organized in regional
                        areas by offical Celebrate Recovery repressentatives.
                        The rallies area events where existing Celebrate
                        Recovery ministries can come together; fellowship with
                        other ministries; connect with their state
                        representatives and learn some of the latests
                        inforamtion about Celebrate Recovery.
                    </p>
                </GridItem>
            </GridContainer>
        </div>
    );
}

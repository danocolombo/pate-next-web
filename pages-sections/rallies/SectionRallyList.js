import React, { useState } from 'react';
import Router from 'next/router';
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import RallyRotatePic from '../../components/RallyCard/RallyRotatePic';

import styles from '/styles/jss/nextjs-material-pate/pages/componentsSections/sectionRallyListCards.js';
import { printObject } from '../../utils/helpers';
const useStyles = makeStyles(styles);

export default function SectionRallyList(props) {
    const [pubTime, setPubTime] = useState();
    const rallies = props.rallies;
    //printObject('SRL:50==>rallies:\n', rallies);
    const [activeRotate1, setActiveRotate1] = React.useState('');
    const [activeRotate2, setActiveRotate2] = React.useState('');
    const [activeRotate3, setActiveRotate3] = React.useState('');
    const classes = useStyles();
    React.useEffect(() => {
        let x = new Date().toLocaleString();
        setPubTime(x);
    });
    React.useEffect(() => {
        if (window) {
            window.addEventListener('resize', addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
            if (window) {
                window.removeEventListener('resize', addStylesForRotatingCards);
            }
        };
    });
    const addStylesForRotatingCards = () => {
        var rotatingCards = document.getElementsByClassName(classes.cardRotate);
        for (let i = 0; i < rotatingCards.length; i++) {
            var rotatingCard = rotatingCards[i];
            var cardFront = rotatingCard.getElementsByClassName(
                classes.front
            )[0];
            var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
            cardFront.style.height = 'unset';
            cardFront.style.width = 'unset';
            cardBack.style.height = 'unset';
            cardBack.style.width = 'unset';
            var rotatingWrapper = rotatingCard.parentElement;
            var cardWidth = rotatingCard.parentElement.offsetWidth;
            var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
            rotatingWrapper.style.height = cardHeight + 'px';
            rotatingWrapper.style['margin-bottom'] = 30 + 'px';
            cardFront.style.height = 'unset';
            cardFront.style.width = 'unset';
            cardBack.style.height = 'unset';
            cardBack.style.width = 'unset';
            cardFront.style.height = cardHeight + 35 + 'px';
            cardFront.style.width = cardWidth + 'px';
            cardBack.style.height = cardHeight + 35 + 'px';
            cardBack.style.width = cardWidth + 'px';
        }
    };
    return (
        <div className='cd-section' id='cards'>
            <div className={classes.sectionGray}>
                <div id='morphingCards' className='cd-section'>
                    <div className={classes.container}>
                        <div className={classes.title}>
                            <h2>Upcoming Events</h2>
                        </div>
                        <div className={classes.eventsWrapper}>
                            <GridContainer>
                                {rallies.map((rally) => {
                                    return (
                                        <GridItem
                                            key={rally.id}
                                            xs={12}
                                            sm={6}
                                            md={6}
                                            lg={4}
                                        >
                                            <RallyRotatePic
                                                key={rally.id}
                                                rally={rally}
                                            />
                                        </GridItem>
                                    );
                                })}
                            </GridContainer>

                            {pubTime && (
                                <div
                                    style={{
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {pubTime}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

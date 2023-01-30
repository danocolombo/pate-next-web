import React from 'react';
import Router from 'next/router';
import makeStyles from '@mui/styles/makeStyles';
import Refresh from '@mui/icons-material/Refresh';

import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Success from '/components/Typography/Success.js';
import Subject from '@mui/icons-material/Subject';
import Button from '/components/CustomButtons/Button.js';
import styles from '/styles/jss/nextjs-material-pate/pages/componentsSections/sectionCards.js';

const useStyles = makeStyles(styles);
export default function EventCard(props) {
    const classes = useStyles();
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
        <div>
            <Card className={classes.cardRotate}>
                <div className={classes.front}>
                    <CardBody className={classes.cardBodyRotate}>
                        <Success>
                            <h5 className={classes.cardCategorySocial}>
                                <i className='far fa-newspaper' /> Manual
                                Rotating Card
                            </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                            <a
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                            >
                                {'"'}This card is doing a full rotation, click
                                on the rotate button{'"'}
                            </a>
                        </h4>
                        <p className={classes.cardDescription}>
                            Don{"'"}t be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                        </p>
                        <div className={classes.textCenter}>
                            <Button
                                round
                                color='success'
                                onClick={() =>
                                    setActiveRotate1(classes.activateRotate)
                                }
                            >
                                <Refresh /> Rotate
                            </Button>
                        </div>
                    </CardBody>
                </div>
                <div className={classes.back}>
                    <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>Do more...</h5>
                        <p className={classes.cardDescription}>
                            You can read this article or share it with your
                            friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                            <Button round color='rose'>
                                <Subject /> Read
                            </Button>
                            <Button round justIcon color='twitter'>
                                <i className='fab fa-twitter' />
                            </Button>
                            <Button round justIcon color='dribbble'>
                                <i className='fab fa-dribbble' />
                            </Button>
                            <Button round justIcon color='facebook'>
                                <i className='fab fa-facebook' />
                            </Button>
                        </div>
                        <br />
                        <Button link onClick={() => setActiveRotate1('')}>
                            <Refresh /> Back...
                        </Button>
                    </CardBody>
                </div>
            </Card>
        </div>
    );
}

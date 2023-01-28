import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import {
    dateNumsToLongDayLongMondayDay,
    prettyTime,
} from '../../utils/helpers';
import styles from '/styles/jss/nextjs-material-pate/components/rallyRotateCard';
const useStyles = makeStyles(styles);
export default function RallyRotatePic({ rally }) {
    console.log('RALLY:', rally);
    const cardDate = dateNumsToLongDayLongMondayDay(rally.eventDate);
    const cardStartTime = prettyTime(rally.startTime);
    const cardEndTime = prettyTime(rally.endTime);

    const stateImage = `/img/states/${rally.stateProv.toLowerCase()}.png`;
    const classes = useStyles();
    const [activeRotate1, setActiveRotate1] = React.useState('');
    const [activeRotate2, setActiveRotate2] = React.useState('');
    const [activeRotate3, setActiveRotate3] = React.useState('');
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
    const displayFrontDate = (dateNum) => {
        // date value will be YYYYMMDD
        const prepped = `${dateNum.slice(0, 4)}-${dateNum.slice(
            4,
            6
        )}-${dateNum.slice(6)}`;
        const dateObj = new Date(prepped);

        let options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            ordinal: 'ordinal',
        };
        const returnValue = dateObj.toLocaleDateString('en-US', options);
        return returnValue;
    };
    return (
        <div>
            <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                    <div
                        className={
                            classes.front + ' ' + classes.wrapperBackground
                        }
                        style={{
                            backgroundImage: "url('/img/background.jpg')",
                        }}
                    >
                        <CardBody background className={classes.cardBodyRotate}>
                            <h6 className={classes.cardCategoryWhite}>{''}</h6>
                            <a
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                            >
                                <h3 className={classes.cardTitleWhite}>
                                    {rally.city}, {rally.stateProv}
                                    <br />
                                    {cardDate}
                                </h3>
                            </a>
                        </CardBody>
                    </div>
                    <div
                        className={
                            classes.back + ' ' + classes.wrapperBackground
                        }
                        style={{
                            backgroundImage: "url('/img/background.jpg')",
                        }}
                    >
                        <CardBody background className={classes.cardBodyRotate}>
                            <h5 className={classes.cardRallyName}>
                                {rally.name}
                            </h5>
                            <div className={classes.cardRallyAddressLine}>
                                {rally.street}
                            </div>
                            <div className={classes.cardRallyAddressLine}>
                                {rally.city},{rally.stateProv}{' '}
                                {rally.postalCode}
                            </div>

                            <p className={classes.cardEventDate}>
                                {cardDate}
                                <br />
                                {cardStartTime}-{cardEndTime}
                            </p>
                            <div className={classes.textCenter}>
                                <Button round justIcon color='success'>
                                    <HowToRegIcon />
                                </Button>
                                <Button color='info'>
                                    <ExitToAppIcon />
                                    REGISTER...
                                </Button>
                            </div>
                        </CardBody>
                    </div>
                </Card>
            </div>
        </div>
    );
}

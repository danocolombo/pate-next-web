import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import Favorite from '@mui/icons-material/Favorite';
import Share from '@mui/icons-material/Share';
import ChatBubble from '@mui/icons-material/ChatBubble';
import Schedule from '@mui/icons-material/Schedule';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Subject from '@mui/icons-material/Subject';
import WatchLater from '@mui/icons-material/WatchLater';
import People from '@mui/icons-material/People';
import Business from '@mui/icons-material/Business';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Delete from '@mui/icons-material/Delete';
import Bookmark from '@mui/icons-material/Bookmark';
import Refresh from '@mui/icons-material/Refresh';
import Receipt from '@mui/icons-material/Receipt';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Card from '/components/Card/Card.js';
import CardHeader from '/components/Card/CardHeader.js';
import CardBody from '/components/Card/CardBody.js';
import CardFooter from '/components/Card/CardFooter.js';
import CardAvatar from '/components/Card/CardAvatar.js';
import Info from '/components/Typography/Info.js';
import Danger from '/components/Typography/Danger.js';
import Success from '/components/Typography/Success.js';
import Warning from '/components/Typography/Warning.js';
import Rose from '/components/Typography/Rose.js';
import Button from '/components/CustomButtons/Button.js';

import styles from '/styles/jss/nextjs-material-pate/pages/serveSections/serveEventsCard.js';

const useStyles = makeStyles(styles);

export default function EventListCard(props) {
    console.log('ININININ');
    const [activeRotate1, setActiveRotate1] = React.useState('');
    const [activeRotate2, setActiveRotate2] = React.useState('');
    const [activeRotate3, setActiveRotate3] = React.useState('');
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
        <div className={classes.container}>
            <Card rally>
                <div className={classes.cardTitle}>What</div>
            </Card>
        </div>
    );
}

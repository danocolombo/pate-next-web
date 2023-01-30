import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Refresh from '@mui/icons-material/Refresh';
import {
    dateNumsToLongDayLongMondayDay,
    prettyTime,
} from '../../utils/helpers';
import styles from '/styles/jss/nextjs-material-pate/components/rallyRotateCard';
const useStyles = makeStyles(styles);
export default function RallyFlipSolid({ rally }) {
    console.log('SOLID:', rally);
    const cardDate = dateNumsToLongDayLongMondayDay(rally.eventDate);
    const cardStartTime = prettyTime(rally.startTime);
    const cardEndTime = prettyTime(rally.endTime);
    const classes = useStyles();
    const [activeRotate1, setActiveRotate1] = React.useState('');
    return (
        <div
            className={
                classes.rotatingCardContainer +
                ' ' +
                classes.manualRotate +
                ' ' +
                activeRotate1
            }
        >
            <Card className={classes.cardRotate}>
                <div
                    className={
                        classes.rotatingCardContainer +
                        ' ' +
                        classes.manualRotate +
                        ' ' +
                        activeRotate1
                    }
                >
                    <Card className={classes.cardRotate}>
                        <div className={classes.front}>
                            <CardBody className={classes.cardBodyRotate}>
                                <h6 className={classes.cardCategory}>{''}</h6>
                                <h3 className={classes.cardTitle}>
                                    {rally.city}, {rally.stateProv}
                                    <br />
                                    {cardDate}
                                </h3>
                                <h4 className={classes.cardTitle}>
                                    <a
                                        href='#pablo'
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {'"'}This card is doing a full rotation,
                                        click on the rotate button{'"'}
                                    </a>
                                </h4>
                                <p className={classes.cardDescription}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth And I love you like Kanye loves Kanye
                                    I love Rick Owens’ bed design but the back
                                    is...
                                </p>
                                <div className={classes.textCenter}>
                                    <Button
                                        round
                                        color='success'
                                        onClick={() =>
                                            setActiveRotate1(
                                                classes.activateRotate
                                            )
                                        }
                                    >
                                        <Refresh /> Rotate
                                    </Button>
                                </div>
                            </CardBody>
                        </div>
                        <div className={classes.back}>
                            <CardBody className={classes.cardBodyRotate}>
                                <h5 className={classes.cardTitle}>
                                    Do more...
                                </h5>
                                <p className={classes.cardDescription}>
                                    You can read this article or share it with
                                    your friends and family on different
                                    networks...
                                </p>

                                <br />
                                <Button
                                    link
                                    onClick={() => setActiveRotate1('')}
                                >
                                    <Refresh /> Back...
                                </Button>
                            </CardBody>
                        </div>
                    </Card>
                </div>
            </Card>
        </div>
    );
}

import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import Icon from '@mui/material/Icon';
import Delete from '@mui/icons-material/Delete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Receipt from '@mui/icons-material/Receipt';
import Subject from '@mui/icons-material/Subject';
import Refresh from '@mui/icons-material/Refresh';
import {
    dateNumsToLongDayLongMondayDay,
    prettyTime,
} from '../../utils/helpers';
import styles from '/styles/jss/nextjs-material-pate/components/rallyRotateCard';
const useStyles = makeStyles(styles);
export default function RallyFlipPic({ rally }) {
    console.log('PIC:', rally);
    const cardDate = dateNumsToLongDayLongMondayDay(rally.eventDate);
    const cardStartTime = prettyTime(rally.startTime);
    const cardEndTime = prettyTime(rally.endTime);
    const classes = useStyles();

    const [activeRotate2, setActiveRotate2] = React.useState('');
    return (
        <div
            className={
                classes.rotatingCardContainer +
                ' ' +
                classes.manualRotate +
                ' ' +
                activeRotate2
            }
        >
            <Card className={classes.cardRotate}>
                <div
                    className={classes.front + ' ' + classes.wrapperBackground}
                    style={{
                        backgroundImage: "url('/img/examples/card-blog6.jpg')",
                    }}
                >
                    <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                            Full Background Card
                        </h6>
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                            <h3 className={classes.cardTitleWhite}>
                                This card is doing a full rotation, click on the
                                rotate button
                            </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                            Don{"'"}t be scared of the truth because we need to
                            restart the human...
                        </p>
                        <div className={classes.textCenter}>
                            <Button
                                round
                                color='danger'
                                onClick={() =>
                                    setActiveRotate2(classes.activateRotate)
                                }
                            >
                                <Refresh /> Rotate
                            </Button>
                        </div>
                    </CardBody>
                </div>
                <div
                    className={classes.back + ' ' + classes.wrapperBackground}
                    style={{
                        backgroundImage: "url('/img/examples/card-blog6.jpg')",
                    }}
                >
                    <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                        <p className={classes.cardDescriptionWhite}>
                            As an Admin, you have shortcuts to edit, view or
                            delete the posts.
                        </p>
                        <div className={classes.textCenter}>
                            <Button round justIcon color='info'>
                                <Subject />
                            </Button>
                            <Button round justIcon color='success'>
                                <Icon>mode_edit</Icon>
                            </Button>
                            <Button round justIcon color='danger'>
                                <Delete />
                            </Button>
                            <br />
                            <br />
                            <Button
                                round
                                color='danger'
                                onClick={() => setActiveRotate2('')}
                            >
                                <Refresh /> Back...
                            </Button>
                        </div>
                    </CardBody>
                </div>
            </Card>
        </div>
    );
}

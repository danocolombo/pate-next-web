import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
// @material-ui icons
import Mail from '@mui/icons-material/Mail';

import styles from '/styles/jss/nextjs-material-pate/pages/componentsSections/preFooter.js';

const useStyles = makeStyles(styles);

export default function SectionNewsletter() {
    const classes = useStyles();
    return (
        <div>
            <br />

            <div
                className={classNames(
                    classes.subscribeLine,
                    classes.subscribeLineImage
                )}
                style={{ backgroundImage: "url('/img/newsletter.jpg')" }}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem
                            xs={12}
                            sm={6}
                            md={6}
                            className={classNames(
                                classes.mlAuto,
                                classes.mrAuto
                            )}
                        >
                            <div className={classes.textCenter}>
                                <h3 className={classes.title}>
                                    Subscribe to our Newsletter
                                </h3>
                                <p className={classes.description}>
                                    Join our newsletter and get news in your
                                    inbox every week! We hate spam too, so no
                                    worries about this.
                                </p>
                            </div>
                            <Card raised className={classes.card}>
                                <CardBody className={classes.cardBody}>
                                    <form>
                                        <GridContainer>
                                            <GridItem
                                                xs={12}
                                                sm={6}
                                                md={6}
                                                lg={8}
                                            >
                                                <CustomInput
                                                    id='emailPreFooter'
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className:
                                                            classes.cardForm,
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position='start'>
                                                                <Mail />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder:
                                                            'Your Email...',
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem
                                                xs={12}
                                                sm={6}
                                                md={6}
                                                lg={4}
                                            >
                                                <Button
                                                    color='primary'
                                                    block
                                                    className={
                                                        classes.subscribeButton
                                                    }
                                                >
                                                    subscribe
                                                </Button>
                                            </GridItem>
                                        </GridContainer>
                                    </form>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}

/*eslint-disable*/
import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// @mui/icons-material
import Camera from '@mui/icons-material/Camera';
import Palette from '@mui/icons-material/Palette';
import People from '@mui/icons-material/People';
import Add from '@mui/icons-material/Add';
import Favorite from '@mui/icons-material/Favorite';
// core components
import Header from '/components/Header/PateHeader.js';
import Footer from '/components/Footer/Footer.js';
import ProfileForm from '../pages-sections/profile/SectionProfileForm';
import SectionRegistrationList from '../pages-sections/registrations/SectionRegistrationsList';
import PateFooter from '../pages-sections/footer/PateFooter';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import HeaderLinks from '/components/Header/PateHeaderLinks.js';
import NavPills from '/components/NavPills/NavPills.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CardHeader from '/components/Card/CardHeader.js';
import Badge from '/components/Badge/Badge.js';
import Muted from '/components/Typography/Muted.js';
import Parallax from '/components/Parallax/Parallax.js';
import Clearfix from '/components/Clearfix/Clearfix.js';
import Button from '/components/CustomButtons/Button.js';

import profilePageStyle from '/styles/jss/nextjs-material-pate/pages/profilePageStyle.js';

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
            <Parallax
                image='/img/background.jpg'
                filter='dark'
                className={classes.parallax}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <GridContainer justifyContent='center'>
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.profile}>
                                <div>
                                    <img
                                        src='/img/faces/default.png'
                                        alt='...'
                                        className={imageClasses}
                                    />
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div
                        className={classNames(
                            classes.formSection,
                            classes.textCenter
                        )}
                    >
                        <ProfileForm />
                    </div>
                    <div>
                        <SectionRegistrationList />
                    </div>
                    <div className={classes.profileTabs}>
                        <NavPills
                            alignCenter
                            color='primary'
                            tabs={[
                                {
                                    tabButton: 'Work',
                                    tabIcon: Palette,
                                    tabContent: (
                                        <GridContainer>
                                            <GridItem
                                                xs={12}
                                                sm={12}
                                                md={7}
                                                className={classes.gridItem}
                                            >
                                                <h4 className={classes.title}>
                                                    Latest Collections
                                                </h4>
                                                <GridContainer
                                                    className={
                                                        classes.collections
                                                    }
                                                >
                                                    <GridItem
                                                        xs={12}
                                                        sm={12}
                                                        md={6}
                                                    >
                                                        <Card
                                                            background
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/img/examples/mariya-georgieva.jpg')",
                                                            }}
                                                        >
                                                            <CardBody
                                                                background
                                                                className={
                                                                    classes.cardBody
                                                                }
                                                            >
                                                                <Badge
                                                                    color='warning'
                                                                    className={
                                                                        classes.badge
                                                                    }
                                                                >
                                                                    Spring 2016
                                                                </Badge>
                                                                <a href='#pablo'>
                                                                    <h2
                                                                        className={
                                                                            classes.cardTitleWhite
                                                                        }
                                                                    >
                                                                        Stilleto
                                                                    </h2>
                                                                </a>
                                                            </CardBody>
                                                        </Card>
                                                    </GridItem>
                                                    <GridItem
                                                        xs={12}
                                                        sm={12}
                                                        md={6}
                                                    >
                                                        <Card
                                                            background
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/img/examples/clem-onojeghuo.jpg')",
                                                            }}
                                                        >
                                                            <CardBody
                                                                background
                                                                className={
                                                                    classes.cardBody
                                                                }
                                                            >
                                                                <Badge
                                                                    color='info'
                                                                    className={
                                                                        classes.badge
                                                                    }
                                                                >
                                                                    Spring 2016
                                                                </Badge>
                                                                <a href='#pablo'>
                                                                    <h2
                                                                        className={
                                                                            classes.cardTitleWhite
                                                                        }
                                                                    >
                                                                        High
                                                                        Heels
                                                                    </h2>
                                                                </a>
                                                            </CardBody>
                                                        </Card>
                                                    </GridItem>
                                                    <GridItem
                                                        xs={12}
                                                        sm={12}
                                                        md={6}
                                                    >
                                                        <Card
                                                            background
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/img/examples/olu-eletu.jpg')",
                                                            }}
                                                        >
                                                            <CardBody
                                                                background
                                                                className={
                                                                    classes.cardBody
                                                                }
                                                            >
                                                                <Badge
                                                                    color='danger'
                                                                    className={
                                                                        classes.badge
                                                                    }
                                                                >
                                                                    Summer 2016
                                                                </Badge>
                                                                <a href='#pablo'>
                                                                    <h2
                                                                        className={
                                                                            classes.cardTitleWhite
                                                                        }
                                                                    >
                                                                        Flats
                                                                    </h2>
                                                                </a>
                                                            </CardBody>
                                                        </Card>
                                                    </GridItem>
                                                    <GridItem
                                                        xs={12}
                                                        sm={12}
                                                        md={6}
                                                    >
                                                        <Card
                                                            background
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/img/examples/darren-coleshill.jpg')",
                                                            }}
                                                        >
                                                            <CardBody
                                                                background
                                                                className={
                                                                    classes.cardBody
                                                                }
                                                            >
                                                                <Badge
                                                                    color='success'
                                                                    className={
                                                                        classes.badge
                                                                    }
                                                                >
                                                                    Winter 2016
                                                                </Badge>
                                                                <a href='#pablo'>
                                                                    <h2
                                                                        className={
                                                                            classes.cardTitleWhite
                                                                        }
                                                                    >
                                                                        Men{"'"}
                                                                        s
                                                                        Sneakers
                                                                    </h2>
                                                                </a>
                                                            </CardBody>
                                                        </Card>
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                            <GridItem
                                                xs={12}
                                                sm={12}
                                                md={2}
                                                className={classes.gridItem}
                                            >
                                                <h4 className={classes.title}>
                                                    Stats
                                                </h4>
                                                <ul
                                                    className={
                                                        classes.listUnstyled
                                                    }
                                                >
                                                    <li>
                                                        <b>60</b> Products
                                                    </li>
                                                    <li>
                                                        <b>4</b> Collections
                                                    </li>
                                                    <li>
                                                        <b>331</b> Influencers
                                                    </li>
                                                    <li>
                                                        <b>1.2K</b> Likes
                                                    </li>
                                                </ul>
                                                <hr />
                                                <h4 className={classes.title}>
                                                    About this work
                                                </h4>
                                                <p
                                                    className={
                                                        classes.description
                                                    }
                                                >
                                                    French luxury footwear and
                                                    fashion. The footwear has
                                                    incorporated shiny,
                                                    red-lacquered soles that
                                                    have become his signature.
                                                </p>
                                                <hr />
                                                <h4 className={classes.title}>
                                                    Focus
                                                </h4>
                                                <Badge color='primary'>
                                                    Footwear
                                                </Badge>
                                                <Badge color='rose'>
                                                    Luxury
                                                </Badge>
                                            </GridItem>
                                        </GridContainer>
                                    ),
                                },
                                {
                                    tabButton: 'Connections',
                                    tabIcon: People,
                                    tabContent: (
                                        <div>
                                            <GridContainer justifyContent='center'>
                                                <GridItem
                                                    xs={12}
                                                    sm={12}
                                                    md={5}
                                                    className={classes.gridItem}
                                                >
                                                    <Card
                                                        profile
                                                        plain
                                                        className={classes.card}
                                                    >
                                                        <GridContainer>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={5}
                                                            >
                                                                <CardHeader
                                                                    image
                                                                    plain
                                                                >
                                                                    <a href='#pablo'>
                                                                        <img
                                                                            src='/img/faces/avatar.jpg'
                                                                            alt='...'
                                                                        />
                                                                    </a>
                                                                    <div
                                                                        className={
                                                                            classes.coloredShadow
                                                                        }
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url('/img/faces/avatar.jpg')",
                                                                            opacity:
                                                                                '1',
                                                                        }}
                                                                    />
                                                                </CardHeader>
                                                            </GridItem>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={7}
                                                            >
                                                                <CardBody plain>
                                                                    <h4
                                                                        className={
                                                                            classes.cardTitle
                                                                        }
                                                                    >
                                                                        Gigi
                                                                        Hadid
                                                                    </h4>
                                                                    <Muted>
                                                                        <h6>
                                                                            MODEL
                                                                        </h6>
                                                                    </Muted>
                                                                    <p
                                                                        className={
                                                                            classes.description
                                                                        }
                                                                    >
                                                                        Don{"'"}
                                                                        t be
                                                                        scared
                                                                        of the
                                                                        truth
                                                                        because
                                                                        we need
                                                                        to
                                                                        restart
                                                                        the
                                                                        human
                                                                        foundation
                                                                        in
                                                                        truth...
                                                                    </p>
                                                                </CardBody>
                                                            </GridItem>
                                                        </GridContainer>
                                                    </Card>
                                                </GridItem>
                                                <GridItem
                                                    xs={12}
                                                    sm={12}
                                                    md={5}
                                                    className={classes.gridItem}
                                                >
                                                    <Card
                                                        profile
                                                        plain
                                                        className={classes.card}
                                                    >
                                                        <GridContainer>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={5}
                                                            >
                                                                <CardHeader
                                                                    image
                                                                    plain
                                                                >
                                                                    <a href='#pablo'>
                                                                        <img
                                                                            src='/img/faces/marc.jpg'
                                                                            alt='...'
                                                                        />
                                                                    </a>
                                                                    <div
                                                                        className={
                                                                            classes.coloredShadow
                                                                        }
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url('/img/faces/marc.jpg')",
                                                                            opacity:
                                                                                '1',
                                                                        }}
                                                                    />
                                                                </CardHeader>
                                                            </GridItem>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={7}
                                                            >
                                                                <CardBody plain>
                                                                    <h4
                                                                        className={
                                                                            classes.cardTitle
                                                                        }
                                                                    >
                                                                        Marc
                                                                        Jacobs
                                                                    </h4>
                                                                    <Muted>
                                                                        <h6>
                                                                            DESIGNER
                                                                        </h6>
                                                                    </Muted>
                                                                    <p
                                                                        className={
                                                                            classes.description
                                                                        }
                                                                    >
                                                                        Don{"'"}
                                                                        t be
                                                                        scared
                                                                        of the
                                                                        truth
                                                                        because
                                                                        we need
                                                                        to
                                                                        restart
                                                                        the
                                                                        human
                                                                        foundation
                                                                        in
                                                                        truth...
                                                                    </p>
                                                                </CardBody>
                                                            </GridItem>
                                                        </GridContainer>
                                                    </Card>
                                                </GridItem>
                                            </GridContainer>
                                            <GridContainer justifyContent='center'>
                                                <GridItem
                                                    xs={12}
                                                    sm={12}
                                                    md={5}
                                                    className={classes.gridItem}
                                                >
                                                    <Card
                                                        profile
                                                        plain
                                                        className={classes.card}
                                                    >
                                                        <GridContainer>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={5}
                                                            >
                                                                <CardHeader
                                                                    image
                                                                    plain
                                                                >
                                                                    <a href='#pablo'>
                                                                        <img
                                                                            src='/img/faces/kendall.jpg'
                                                                            alt='...'
                                                                        />
                                                                    </a>
                                                                    <div
                                                                        className={
                                                                            classes.coloredShadow
                                                                        }
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url('/img/faces/kendall.jpg')",
                                                                            opacity:
                                                                                '1',
                                                                        }}
                                                                    />
                                                                </CardHeader>
                                                            </GridItem>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={7}
                                                            >
                                                                <CardBody plain>
                                                                    <h4
                                                                        className={
                                                                            classes.cardTitle
                                                                        }
                                                                    >
                                                                        Kendall
                                                                        Jenner
                                                                    </h4>
                                                                    <Muted>
                                                                        <h6>
                                                                            MODEL
                                                                        </h6>
                                                                    </Muted>
                                                                    <p
                                                                        className={
                                                                            classes.description
                                                                        }
                                                                    >
                                                                        I love
                                                                        you like
                                                                        Kanye
                                                                        loves
                                                                        Kanye.
                                                                        Don
                                                                        {"'"}t
                                                                        be
                                                                        scared
                                                                        of the
                                                                        truth.
                                                                    </p>
                                                                </CardBody>
                                                            </GridItem>
                                                        </GridContainer>
                                                    </Card>
                                                </GridItem>
                                                <GridItem
                                                    xs={12}
                                                    sm={12}
                                                    md={5}
                                                    className={classes.gridItem}
                                                >
                                                    <Card
                                                        profile
                                                        plain
                                                        className={classes.card}
                                                    >
                                                        <GridContainer>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={5}
                                                            >
                                                                <CardHeader
                                                                    image
                                                                    plain
                                                                >
                                                                    <a href='#pablo'>
                                                                        <img
                                                                            src='/img/faces/card-profile2-square.jpg'
                                                                            alt='...'
                                                                        />
                                                                    </a>
                                                                    <div
                                                                        className={
                                                                            classes.coloredShadow
                                                                        }
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url('/img/faces/card-profile2-square.jpg')",
                                                                            opacity:
                                                                                '1',
                                                                        }}
                                                                    />
                                                                </CardHeader>
                                                            </GridItem>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={7}
                                                            >
                                                                <CardBody plain>
                                                                    <h4
                                                                        className={
                                                                            classes.cardTitle
                                                                        }
                                                                    >
                                                                        George
                                                                        West
                                                                    </h4>
                                                                    <Muted>
                                                                        <h6>
                                                                            MODEL/DJ
                                                                        </h6>
                                                                    </Muted>
                                                                    <p
                                                                        className={
                                                                            classes.description
                                                                        }
                                                                    >
                                                                        I love
                                                                        you like
                                                                        Kanye
                                                                        loves
                                                                        Kanye.
                                                                    </p>
                                                                </CardBody>
                                                            </GridItem>
                                                        </GridContainer>
                                                    </Card>
                                                </GridItem>
                                            </GridContainer>
                                        </div>
                                    ),
                                },
                                {
                                    tabButton: 'Media',
                                    tabIcon: Camera,
                                    tabContent: (
                                        <GridContainer justifyContent='center'>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <img
                                                    alt='...'
                                                    src='/img/examples/mariya-georgieva.jpg'
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt='...'
                                                    src='/img/examples/clem-onojegaw.jpg'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <img
                                                    alt='...'
                                                    src='/img/examples/clem-onojeghuo.jpg'
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt='...'
                                                    src='/img/examples/olu-eletu.jpg'
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt='...'
                                                    src='/img/examples/cynthia-del-rio.jpg'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    ),
                                },
                            ]}
                        />
                    </div>
                    <Clearfix />
                </div>
            </div>
            <Footer content={<PateFooter />} />
        </div>
    );
}

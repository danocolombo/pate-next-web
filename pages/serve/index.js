/*eslint-disable*/
import React, { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Icon from '@mui/material/Icon';
import { useSessionContext } from '../../store/session-context';
// @mui/icons-material
import Timeline from '@mui/icons-material/Timeline';
import Code from '@mui/icons-material/Code';
import Group from '@mui/icons-material/Group';
import Face from '@mui/icons-material/Face';
import Email from '@mui/icons-material/Email';
import Check from '@mui/icons-material/Check';
import Favorite from '@mui/icons-material/Favorite';
// core components
import Header from '/components/Header/PateHeader.js';
import HeaderLinks from '/components/Header/PateHeaderLinks.js';
import Footer from '/components/Footer/Footer.js';
import PateFooter from '../../pages-sections/footer/PateFooter';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import InfoArea from '/components/InfoArea/InfoArea.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import ServeOverview from '../../pages-sections/serve/ServeOverview';
import servePageStyle from '/styles/jss/nextjs-material-pate/pages/servePageStyle.js';
import ServeEventsCard from '../../pages-sections/serve/ServeEventsCard';
const useStyles = makeStyles(servePageStyle);

export default function ServePage({ ...rest }) {
    const { currentSession } = useSessionContext();
    const myRallies = [
        {
            meal: {
                mealCount: 0,
                startTime: '11:30',
                cost: '0',
                deadline: '2023-03-01',
                message: 'Donations',
                mealsServed: 0,
            },
            status: 'approved',
            eventRegion: 'east',
            stateProv: 'GA',
            coordinator: {
                name: 'Boomer Twining',
                id: '59627610-4469-4a16-bbbe-4837098de13f',
                phone: '4783359428',
                email: 'midgacrguy@gmail.com',
            },
            name: 'Northway Church',
            geolocation: {
                lng: '-83.75725490183586',
                lat: '32.881862290891824',
            },
            city: 'Macon',
            approved: true,
            graphic: '',
            affiliate: 'CRP8',
            eventCompKey:
                '2023#03#04#GA#3f924542665d6ae5c5941bbe066f3254#59627610-4469-4a16-bbbe-4837098de13f',
            region: 'us#east',
            id: '',
            postalCode: '31210',
            eventDate: '20230304',
            contact: {
                name: 'Sean King',
                phone: '4782583986',
                email: 'seankingrcdd@gmail.com',
            },
            message: '',
            uid: '3f924542665d6ae5c5941bbe066f3254',
            registrations: 0,
            startTime: '12:30',
            attendees: 0,
            endTime: '16:30',
            street: '5915 Zebulon Rd',
        },
    ];
    const upcomingStateRallies = [
        {
            meal: {
                mealCount: 0,
                startTime: '11:30',
                cost: '0',
                deadline: '2023-03-01',
                message: 'Donations',
                mealsServed: 0,
            },
            status: 'approved',
            eventRegion: 'east',
            stateProv: 'GA',
            coordinator: {
                name: 'Boomer Twining',
                id: '59627610-4469-4a16-bbbe-4837098de13f',
                phone: '4783359428',
                email: 'midgacrguy@gmail.com',
            },
            name: 'Northway Church',
            geolocation: {
                lng: '-83.75725490183586',
                lat: '32.881862290891824',
            },
            city: 'Macon',
            approved: true,
            graphic: '',
            affiliate: 'CRP8',
            eventCompKey:
                '2023#03#04#GA#3f924542665d6ae5c5941bbe066f3254#59627610-4469-4a16-bbbe-4837098de13f',
            region: 'us#east',
            id: '',
            postalCode: '31210',
            eventDate: '20230304',
            contact: {
                name: 'Sean King',
                phone: '4782583986',
                email: 'seankingrcdd@gmail.com',
            },
            message: '',
            uid: '3f924542665d6ae5c5941bbe066f3254',
            registrations: 0,
            startTime: '12:30',
            attendees: 0,
            endTime: '16:30',
            street: '5915 Zebulon Rd',
        },
    ];
    const pastStateRallies = [
        {
            meal: {
                mealCount: 14,
                startTime: '12:00',
                cost: 'Free ',
                deadline: '2022-06-14',
                message: 'Donations accepted ',
                mealsServed: 0,
            },
            eventDate: '20220618',
            contact: {
                name: 'Phyllis Steinborn',
                phone: '7062072396',
                email: 'mikeandphyllissteinborn@gmail.com',
            },
            status: '',
            eventRegion: 'east',
            message: '',
            stateProv: 'GA',
            coordinator: {
                name: 'ROBIN SMITH',
                id: 'bb3aa10a-0956-41ba-bcba-51e9ffd80985',
                phone: '4045634444',
                email: 'rsmithcrrep@gmail.com',
            },
            name: 'Living Hope Church',
            uid: '1ffc518ad17bae83d9b201ff65330820',
            registrations: 17,
            city: 'Athens',
            startTime: '13:00',
            approved: true,
            attendees: 0,
            graphic: 'Athens.jpg',
            endTime: '16:00',
            eventCompKey:
                '2022#06#GA#18#1ffc518ad17bae83d9b201ff65330820#bb3aa10a-0956-41ba-bcba-51e9ffd80985',
            region: 'us#east',
            id: '',
            postalCode: '30605',
            street: '2150 Lexington Rd',
        },
        {
            meal: {
                mealCount: 8,
                startTime: '12:00',
                cost: 'Donations',
                deadline: '2022-06-01',
                message: '',
                mealsServed: '30',
            },
            eventDate: '20220604',
            contact: {
                name: 'Clay Johnson',
                phone: '2293224665',
                email: 'tyler9523@hotmail.com',
            },
            status: '',
            eventRegion: 'east',
            message: 'attendance was 30',
            stateProv: 'GA',
            coordinator: {
                name: 'Boomer Twining',
                id: '59627610-4469-4a16-bbbe-4837098de13f',
                phone: '4783359428',
                email: 'midgacrguy@gmail.com',
            },
            name: 'First United Methodist Church of Cordele',
            uid: '9262496f849827c155ca8865b7a39b65',
            registrations: 20,
            city: 'Cordele',
            startTime: '13:00',
            approved: true,
            attendees: 0,
            graphic: 'CORDELE.jpg',
            endTime: '16:00',
            eventCompKey:
                '2022#06#GA#04#9262496f849827c155ca8865b7a39b65#59627610-4469-4a16-bbbe-4837098de13f',
            region: 'us#east',
            id: '',
            postalCode: '31015',
            street: '300 12th Ave E',
        },
        {
            meal: {
                mealCount: 56,
                startTime: '12:00',
                cost: '0',
                deadline: '2021-04-21',
                message: 'No cost, just a blessing',
                mealsServed: '0',
            },
            eventDate: '20210424',
            contact: {
                name: 'Ben Hosey',
                phone: '7067631234',
                email: 'bh@church.net',
            },
            status: 'offered',
            eventRegion: 'east',
            message: 'It is going to be such a blessing to gather again.',
            stateProv: 'GA',
            coordinator: {
                name: 'Dano Colombo',
                id: 'c45d9046-7667-45db-8c16-60071821ba25',
                phone: '7066042494',
                email: 'danocolombo@gmail.com',
            },
            name: 'Southcrest Church',
            uid: '65ff55fb33fe4c0447b086188f2e9b1f',
            registrations: 68,
            city: 'Newnan',
            startTime: '13:00',
            approved: true,
            attendees: '45',
            graphic: 'P8-Newnan-GA-20210424_.png',
            endTime: '16:00',
            eventCompKey:
                '2021#04#GA#21#65ff55fb33fe4c0447b086188f2e9b1f#c45d9046-7667-45db-8c16-60071821ba25',
            region: 'us#east',
            id: '2a7f73c4a7f8601f243b1a89ccc29d7c',
            postalCode: '30265',
            street: '365 International Park',
        },
        {
            meal: {
                mealCount: 41,
                startTime: '13:00',
                cost: '0',
                deadline: '2022-03-10',
                message: '',
                mealsServed: 0,
            },
            eventDate: '20220312',
            contact: {
                name: 'Sal Cilluffo',
                phone: '4049135057',
                email: 'salcrossviewcr@gmail.com',
            },
            status: '',
            eventRegion: 'east',
            message: 'lunch at 12, meeting at 1\n',
            stateProv: 'GA',
            coordinator: {
                name: 'Dean Crouch',
                id: 'fcdd975a-7d15-440e-bb1c-65ebfd2bf87c',
                phone: '6786429267',
                email: 'dean.crouch@gmail.com',
            },
            name: 'Crossview Church',
            uid: '32b8b25ff2b92ce310403a5fb507da65',
            registrations: 54,
            city: 'Marietta',
            startTime: '12:00',
            approved: true,
            attendees: 0,
            graphic: 'marietta2022.png',
            endTime: '16:00',
            eventCompKey:
                '2022#03#GA#12#32b8b25ff2b92ce310403a5fb507da65#fcdd975a-7d15-440e-bb1c-65ebfd2bf87c',
            region: 'us#east',
            id: '',
            postalCode: '30066',
            street: '1100 Piedmont Rd',
        },
        {
            meal: {
                mealCount: 28,
                startTime: '12:00',
                cost: 'none',
                deadline: '2021-05-19',
                message: '',
                mealsServed: '42',
            },
            eventDate: '20210522',
            contact: {
                name: 'Dena Jacobs',
                phone: '9545932254',
                email: 'Denamj44@gmail.com',
            },
            status: '',
            eventRegion: 'east',
            message: '',
            stateProv: 'GA',
            coordinator: {
                name: 'Ronald Coleman',
                id: '0a28050e-5639-4756-86de-6564dfe50b93',
                phone: '6782235129',
                email: 'crrepcoleman@gmail.com',
            },
            name: 'Calvary Chapel Blue Ridge',
            uid: 'cd993db1307d41030ce662bdaa7cb074',
            registrations: 44,
            city: 'Blue Ridge',
            startTime: '13:00',
            approved: true,
            attendees: 53,
            graphic: 'P8-BlueRidge-GA-20210522-web.png',
            endTime: '16:00',
            eventCompKey:
                '2021#05#GA#22#cd993db1307d41030ce662bdaa7cb074#0a28050e-5639-4756-86de-6564dfe50b93',
            region: 'us#east',
            id: '',
            postalCode: '30513',
            street: '101 George Curtis Rd',
        },
        {
            meal: {
                mealCount: 10,
                startTime: '12:00',
                cost: '0',
                deadline: '2021-05-19',
                message: 'No cost, just a blessing',
                mealsServed: 0,
            },
            eventDate: '20210522',
            contact: {
                name: 'Chase Adams',
                phone: '770-598-5535',
                email: '',
            },
            status: 'offered',
            eventRegion: 'east',
            message:
                'We are excited to offer the first rally have the Covid-19 pandemic',
            stateProv: 'GA',
            coordinator: {
                name: 'Ronald Coleman',
                id: '0a28050e-5639-4756-86de-6564dfe50b93',
                phone: '678-2235129',
                email: 'crrepcoleman@gmail.com',
            },
            name: 'Chestnut Mtn Church',
            uid: '65dc88fb33fe4c0887b086188f2e9b1f',
            registrations: 12,
            city: 'Flowery Branch',
            startTime: '13:00',
            approved: false,
            attendees: '0',
            graphic: '20210522-FloweryBranch-GA.png',
            endTime: '16:00',
            attendance: 0,
            eventCompKey:
                '2021#05#GA#22#65dc88fb33fe4c0887b086188f2e9b1f#0a28050e-5639-4756-86de-6564dfe50b93',
            region: 'us#east',
            id: '2a7f73c4a7f8601f243b1a89ccc29d7c',
            postalCode: '30542',
            street: '4903 Chestnut Mtn Cir',
        },
    ];
    const [checked, setChecked] = React.useState([1]);
    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    useEffect(() => {
        if (!currentSession?.idToken?.jwtToken) {
            Router.back();
        }
    }, []);

    const classes = useStyles();
    return (
        <div>
            <Header
                absolute
                color='transparent'
                brand='P8 Rallies'
                links={<HeaderLinks dropdownHoverColor='info' />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url('/img/background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}
            >
                <div className={classes.container}>
                    <GridContainer justifyContent='center'>
                        <GridItem xs={12} sm={10} md={10}>
                            <Card className={classes.cardServe}>
                                <h2 className={classes.cardTitle}>
                                    Principle 8 Service
                                </h2>
                                <CardBody>
                                    <ServeOverview />
                                </CardBody>
                                <ServeEventsCard
                                    cardTitle='My Events'
                                    rallies={myRallies}
                                />
                                <ServeEventsCard
                                    cardTitle='Upcoming Events'
                                    rallies={upcomingStateRallies}
                                />
                                <ServeEventsCard
                                    cardTitle='Past Events'
                                    rallies={pastStateRallies}
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer content={<PateFooter />} />
            </div>
        </div>
    );
}

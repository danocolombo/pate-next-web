import React, { useState } from 'react';
import Router from 'next/router';
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Table from '/components/Table/Table.js';
import Button from '/components/CustomButtons/Button.js';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Close from '@mui/icons-material/Close';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import style from '/styles/jss/nextjs-material-pate/pages/componentsSections/contentAreas.js';
import { printObject } from '../../utils/helpers';
const useStyles = makeStyles(style);

export default function SectionRegistrationList(props) {
    const [pubTime, setPubTime] = useState();

    const classes = useStyles();
    React.useEffect(() => {
        let x = new Date().toLocaleString();
        setPubTime(x);
    });

    return (
        <div className='cd-section' id='cards'>
            <div className={classes.sectionGray}>
                <div id='morphingCards' className='cd-section'>
                    <div className={classes.container}>
                        <div className={classes.eventsWrapper}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <h2>Registrations</h2>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Table
                                        tableHead={[
                                            '',
                                            'PRODUCT',
                                            'COLOR',
                                            'SIZE',
                                            'PRICE',
                                            'QTY',
                                            'AMOUNT',
                                            '',
                                        ]}
                                        tableData={[
                                            [
                                                <div
                                                    className={
                                                        classes.imgContainer
                                                    }
                                                    key={875643}
                                                >
                                                    <img
                                                        src='/img/product1.jpg'
                                                        alt='...'
                                                        className={classes.img}
                                                    />
                                                </div>,
                                                <span key={8756431}>
                                                    <a
                                                        href='#jacket'
                                                        className={
                                                            classes.tdNameAnchor
                                                        }
                                                    >
                                                        Spring Jacket
                                                    </a>
                                                    <br />
                                                    <small
                                                        className={
                                                            classes.tdNameSmall
                                                        }
                                                    >
                                                        by Dolce&amp;Gabbana
                                                    </small>
                                                </span>,
                                                'Red',
                                                'M',
                                                <span key={8756432}>
                                                    <small
                                                        className={
                                                            classes.tdNumberSmall
                                                        }
                                                    >
                                                        €
                                                    </small>{' '}
                                                    549
                                                </span>,
                                                <span key={8756435}>
                                                    1{` `}
                                                    <div
                                                        className={
                                                            classes.buttonGroup
                                                        }
                                                    >
                                                        <Button
                                                            color='info'
                                                            size='sm'
                                                            round
                                                            className={
                                                                classes.firstButton
                                                            }
                                                        >
                                                            <Remove />
                                                        </Button>
                                                        <Button
                                                            color='info'
                                                            size='sm'
                                                            round
                                                            className={
                                                                classes.lastButton
                                                            }
                                                        >
                                                            <Add />
                                                        </Button>
                                                    </div>
                                                </span>,
                                                <span key={87564312}>
                                                    <small
                                                        className={
                                                            classes.tdNumberSmall
                                                        }
                                                    >
                                                        €
                                                    </small>{' '}
                                                    549
                                                </span>,
                                                <Tooltip
                                                    key={8756431234}
                                                    id='close1'
                                                    title='Remove item'
                                                    placement='left'
                                                    classes={{
                                                        tooltip:
                                                            classes.tooltip,
                                                    }}
                                                >
                                                    <Button
                                                        link
                                                        className={
                                                            classes.actionButton
                                                        }
                                                    >
                                                        <Close />
                                                    </Button>
                                                </Tooltip>,
                                            ],
                                            [
                                                <div
                                                    className={
                                                        classes.imgContainer
                                                    }
                                                    key={875643}
                                                >
                                                    <img
                                                        src='/img/product2.jpg'
                                                        alt='...'
                                                        className={classes.img}
                                                    />
                                                </div>,
                                                <span key={875643}>
                                                    <a
                                                        href='#jacket'
                                                        className={
                                                            classes.tdNameAnchor
                                                        }
                                                    >
                                                        Short Pants{' '}
                                                    </a>
                                                    <br />
                                                    <small
                                                        className={
                                                            classes.tdNameSmall
                                                        }
                                                    >
                                                        by Gucci
                                                    </small>
                                                </span>,
                                                'Purple',
                                                'M',
                                                <span key={875643}>
                                                    <small
                                                        className={
                                                            classes.tdNumberSmall
                                                        }
                                                    >
                                                        €
                                                    </small>{' '}
                                                    499
                                                </span>,
                                                <span key={875643}>
                                                    2{` `}
                                                    <div
                                                        className={
                                                            classes.buttonGroup
                                                        }
                                                    >
                                                        <Button
                                                            color='info'
                                                            size='sm'
                                                            round
                                                            className={
                                                                classes.firstButton
                                                            }
                                                        >
                                                            <Remove />
                                                        </Button>
                                                        <Button
                                                            color='info'
                                                            size='sm'
                                                            round
                                                            className={
                                                                classes.lastButton
                                                            }
                                                        >
                                                            <Add />
                                                        </Button>
                                                    </div>
                                                </span>,
                                                <span key={875643}>
                                                    <small
                                                        className={
                                                            classes.tdNumberSmall
                                                        }
                                                    >
                                                        €
                                                    </small>{' '}
                                                    998
                                                </span>,
                                                <Tooltip
                                                    key={875643}
                                                    id='close2'
                                                    title='Remove item'
                                                    placement='left'
                                                    classes={{
                                                        tooltip:
                                                            classes.tooltip,
                                                    }}
                                                >
                                                    <Button
                                                        link
                                                        className={
                                                            classes.actionButton
                                                        }
                                                    >
                                                        <Close />
                                                    </Button>
                                                </Tooltip>,
                                            ],
                                            [
                                                <div
                                                    className={
                                                        classes.imgContainer
                                                    }
                                                    key={875643}
                                                >
                                                    <img
                                                        src='/img/product3.jpg'
                                                        alt='...'
                                                        className={classes.img}
                                                    />
                                                </div>,
                                                <span key={875643}>
                                                    <a
                                                        href='#jacket'
                                                        className={
                                                            classes.tdNameAnchor
                                                        }
                                                    >
                                                        Pencil Skirt
                                                    </a>
                                                    <br />
                                                    <small
                                                        className={
                                                            classes.tdNameSmall
                                                        }
                                                    >
                                                        by Valentino
                                                    </small>
                                                </span>,
                                                'White',
                                                'XL',
                                                <span key={875643}>
                                                    <small
                                                        className={
                                                            classes.tdNumberSmall
                                                        }
                                                    >
                                                        €
                                                    </small>{' '}
                                                    799
                                                </span>,
                                                <span key={875643}>
                                                    1{` `}
                                                    <div
                                                        className={
                                                            classes.buttonGroup
                                                        }
                                                    >
                                                        <Button
                                                            color='info'
                                                            size='sm'
                                                            round
                                                            className={
                                                                classes.firstButton
                                                            }
                                                        >
                                                            <Remove />
                                                        </Button>
                                                        <Button
                                                            color='info'
                                                            size='sm'
                                                            round
                                                            className={
                                                                classes.lastButton
                                                            }
                                                        >
                                                            <Add />
                                                        </Button>
                                                    </div>
                                                </span>,
                                                <span key={875643}>
                                                    <small
                                                        className={
                                                            classes.tdNumberSmall
                                                        }
                                                    >
                                                        €
                                                    </small>{' '}
                                                    799
                                                </span>,
                                                <Tooltip
                                                    key={875643}
                                                    id='close3'
                                                    title='Remove item'
                                                    placement='left'
                                                    classes={{
                                                        tooltip:
                                                            classes.tooltip,
                                                    }}
                                                >
                                                    <Button
                                                        link
                                                        className={
                                                            classes.actionButton
                                                        }
                                                    >
                                                        <Close />
                                                    </Button>
                                                </Tooltip>,
                                            ],
                                            {
                                                purchase: true,
                                                colspan: '3',
                                                amount: (
                                                    <span>
                                                        <small>€</small>2,346
                                                    </span>
                                                ),
                                                col: {
                                                    colspan: 3,
                                                    text: (
                                                        <Button
                                                            color='info'
                                                            round
                                                        >
                                                            Complete Purchase{' '}
                                                            <KeyboardArrowRight />
                                                        </Button>
                                                    ),
                                                },
                                            },
                                        ]}
                                        tableShopping
                                        customHeadCellClasses={[
                                            classes.textCenter,
                                            classes.description,
                                            classes.description,
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight,
                                        ]}
                                        customHeadClassesForCells={[
                                            0, 2, 3, 4, 5, 6,
                                        ]}
                                        customCellClasses={[
                                            classes.tdName,
                                            classes.customFont,
                                            classes.customFont,
                                            classes.tdNumber +
                                                ' ' +
                                                classes.textCenter,
                                            classes.tdNumber +
                                                ' ' +
                                                classes.tdNumberAndButtonGroup,
                                            classes.tdNumber +
                                                ' ' +
                                                classes.textCenter,
                                        ]}
                                        customClassesForCells={[
                                            1, 2, 3, 4, 5, 6,
                                        ]}
                                    />
                                </GridItem>
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

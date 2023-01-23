import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Tooltip from '@mui/material/Tooltip';
// @mui/icons-material
import Reply from '@mui/icons-material/Reply';
import Favorite from '@mui/icons-material/Favorite';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Media from '/components/Media/Media.js';
import Button from '/components/CustomButtons/Button.js';
import CustomInput from '/components/CustomInput/CustomInput.js';

import serveOverviewStyle from '/styles/jss/nextjs-material-pate/pages/serveSections/serveStyle.js';
import classNames from 'classnames';

const useStyles = makeStyles(serveOverviewStyle);

export default function ServeOverview() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <p className={classes.descriptionText}>
                This page allows you to coordinate events, as well as manage and
                review details.
            </p>
        </div>
    );
}

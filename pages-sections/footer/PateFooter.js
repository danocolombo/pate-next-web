import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import landingPageStyle from '/styles/jss/nextjs-material-pate/pages/blogPostPageStyle.js';

const useStyles = makeStyles(landingPageStyle);

function PateFooter() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.left}>
                <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                        <a href='#' target='_blank' className={classes.block}>
                            FAQ
                        </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <a href='#' target='_blank' className={classes.block}>
                            Help
                        </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <a href='#' target='_blank' className={classes.block}>
                            Support
                        </a>
                    </ListItem>
                </List>
            </div>
            <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} - Fortson Guru
            </div>
        </div>
    );
}
export default PateFooter;

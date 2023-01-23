import { grayColor, title } from '/styles/jss/nextjs-material-kit-pro.js';

import tooltipsStyle from '/styles/jss/nextjs-material-kit-pro/tooltipsStyle.js';

const sectionCommentsStyle = {
    ...tooltipsStyle,
    section: {
        backgroundposition: '50%',
        backgroundSize: 'cover',
        padding: '0 0 0 5px',
        textAlign: 'center',
    },
    title: {
        ...title,
        marginBottom: '10px',
        textAlign: 'center',
    },
    footerButtons: {
        float: 'right',
    },
    footerIcons: {
        width: '1.1rem',
        height: '1.1rem',
        position: 'relative',
        display: 'inline-block',
        top: '0',
        marginTop: '-1em',
        marginBottom: '-1em',
        marginRight: '3px',
        verticalAlign: 'middle',
    },
    descriptionText: {
        fontSize: '1.2rem',
    },
    color555: {
        '&,& *': {
            color: grayColor[15] + ' !important',
        },
    },
};

export default sectionCommentsStyle;

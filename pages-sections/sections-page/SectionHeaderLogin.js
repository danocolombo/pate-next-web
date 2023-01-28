import React, { useState } from 'react';
// react plugin for creating date-time-picker
import Datetime from 'react-datetime';
import makeStyles from '@mui/styles/makeStyles';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { CircularProgress } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import Close from '@mui/icons-material/Close';
import Notifications from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Assignment from '@mui/icons-material/Assignment';
import AccountBox from '@mui/icons-material/AccountBox';
import Face from '@mui/icons-material/Face';
import Timeline from '@mui/icons-material/Timeline';
import Code from '@mui/icons-material/Code';
import Group from '@mui/icons-material/Group';
import Email from '@mui/icons-material/Email';
import Check from '@mui/icons-material/Check';
import AttachFile from '@mui/icons-material/AttachFile';
import Layers from '@mui/icons-material/Layers';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Instruction from '/components/Instruction/Instruction.js';
import Card from '/components/Card/Card.js';
import CardHeader from '/components/Card/CardHeader.js';
import CardBody from '/components/Card/CardBody.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import CustomFileInput from '/components/CustomFileInput/CustomFileInput.js';
import InfoArea from '/components/InfoArea/InfoArea.js';
import Accordion from '/components/Accordion/Accordion.js';
import ImageUpload from '/components/CustomUpload/ImageUpload.js';
import { useUserContext } from '../../store/user-context';
import javascriptStyles from '/styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js';
import { Password } from '@mui/icons-material';

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

Transition.displayName = 'Transition';

export default function SectionHeaderLogin({ ...rest }) {
    const { processLogin } = useUserContext();
    const [isLoading, setIsLoading] = useState(true);
    const [loginModal, setLoginModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    const handleChange = (e) => {
        const { value, id } = e.target;
        switch (id) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };
    async function loginHandler() {
        setIsLoading(true);
        try {
            const creds = JSON.stringify({
                username: username,
                password,
                password,
            });
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: creds,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log('SHL:86-->data:\n', data);
            processLogin(data);
        } catch (error) {
            console.log('SHL:88-->error:\n', error);
            // clearSpinner();
        }
        setIsLoading(false);
        setLoginModal(false);
    }
    if (isLoading) {
        <CircularProgress color='primary' />;
    }
    return (
        <div className='cd-section' {...rest}>
            {/* BUTTON LOGIN MODAL */}
            <Button round color='primary' onClick={() => setLoginModal(true)}>
                <AccountCircle /> Login
            </Button>
            {/* LOGIN MODAL START */}
            <Dialog
                classes={{
                    root: classes.modalRoot,
                    paper: classes.modal + ' ' + classes.modalLogin,
                }}
                open={loginModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setLoginModal(false)}
                aria-labelledby='login-modal-slide-title'
                aria-describedby='login-modal-slide-description'
            >
                <Card plain className={classes.modalLoginCard}>
                    <DialogTitle
                        id='login-modal-slide-title'
                        className={classes.modalHeader}
                    >
                        <CardHeader
                            plain
                            color='primary'
                            className={
                                classes.textCenter +
                                ' ' +
                                classes.cardLoginHeader
                            }
                        >
                            <Button
                                simple
                                className={classes.modalCloseButton}
                                key='close'
                                aria-label='Close'
                                onClick={() => setLoginModal(false)}
                            >
                                {' '}
                                <Close className={classes.modalClose} />
                            </Button>
                            <h5 className={classes.cardTitleWhite}>Log in</h5>
                            {/* <div className={classes.socialLine}>
                                <Button
                                    justIcon
                                    link
                                    className={classes.socialLineButton}
                                >
                                    <i className='fab fa-facebook-square' />
                                </Button>
                                <Button
                                    justIcon
                                    link
                                    className={classes.socialLineButton}
                                >
                                    <i className='fab fa-twitter' />
                                </Button>
                                <Button
                                    justIcon
                                    link
                                    className={classes.socialLineButton}
                                >
                                    <i className='fab fa-google-plus-g' />
                                </Button>
                            </div> */}
                        </CardHeader>
                    </DialogTitle>
                    <DialogContent
                        id='login-modal-slide-description'
                        className={classes.modalBody}
                    >
                        <form>
                            <CardBody className={classes.cardLoginBody}>
                                <CustomInput
                                    id='username'
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <AccountBox
                                                    className={classes.icon}
                                                />
                                            </InputAdornment>
                                        ),
                                        placeholder: 'Username...',
                                        type: 'text',
                                        value: username,
                                        onChange: handleChange,
                                        autoComplete: 'off',
                                    }}
                                />

                                <CustomInput
                                    id='password'
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <Icon className={classes.icon}>
                                                    lock_outline
                                                </Icon>
                                            </InputAdornment>
                                        ),
                                        placeholder: 'Password...',
                                        type: 'password',
                                        value: password,
                                        onChange: handleChange,
                                        autoComplete: 'off',
                                    }}
                                />
                            </CardBody>
                        </form>
                    </DialogContent>
                    <DialogActions
                        className={
                            classes.modalFooter +
                            ' ' +
                            classes.justifyContentCenter
                        }
                    >
                        <Button
                            color='primary'
                            simple
                            size='lg'
                            onClick={loginHandler}
                        >
                            {isLoading ? 'Login' : 'Loading...'}
                        </Button>
                    </DialogActions>
                </Card>
            </Dialog>
            {/* LOGIN MODAL END */}
        </div>
    );
}

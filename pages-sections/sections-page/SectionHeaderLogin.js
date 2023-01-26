import React, {useState} from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
import makeStyles from '@mui/styles/makeStyles';
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
import Checkbox from "@mui/material/Checkbox";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import Close from "@mui/icons-material/Close";
import Notifications from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Assignment from "@mui/icons-material/Assignment";
import Mail from "@mui/icons-material/Mail";
import Face from "@mui/icons-material/Face";
import Timeline from "@mui/icons-material/Timeline";
import Code from "@mui/icons-material/Code";
import Group from "@mui/icons-material/Group";
import Email from "@mui/icons-material/Email";
import Check from "@mui/icons-material/Check";
import AttachFile from "@mui/icons-material/AttachFile";
import Layers from "@mui/icons-material/Layers";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Instruction from "/components/Instruction/Instruction.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomFileInput from "/components/CustomFileInput/CustomFileInput.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Accordion from "/components/Accordion/Accordion.js";
import ImageUpload from "/components/CustomUpload/ImageUpload.js";
import javascriptStyles from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";
  
const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionHeaderLogin({ ...rest }) {
    const [loginModal, setLoginModal] = React.useState(false);
    const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* BUTTON LOGIN MODAL */}
      <Button block round onClick={() => setLoginModal(true)}>
                  <AccountCircle /> Login
                </Button>
                {/* LOGIN MODAL START */}
                <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal + " " + classes.modalLogin
                  }}
                  open={loginModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setLoginModal(false)}
                  aria-labelledby="login-modal-slide-title"
                  aria-describedby="login-modal-slide-description"
                >
                  <Card plain className={classes.modalLoginCard}>
                    <DialogTitle id="login-modal-slide-title" className={classes.modalHeader}>
                      <CardHeader
                        plain
                        color="primary"
                        className={
                          classes.textCenter + " " + classes.cardLoginHeader
                        }
                      >
                        <Button
                          simple
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          onClick={() => setLoginModal(false)}
                        >
                          {" "}
                          <Close className={classes.modalClose} />
                        </Button>
                        <h5 className={classes.cardTitleWhite}>Log in</h5>
                        <div className={classes.socialLine}>
                          <Button
                            justIcon
                            link
                            className={classes.socialLineButton}
                          >
                            <i className="fab fa-facebook-square" />
                          </Button>
                          <Button
                            justIcon
                            link
                            className={classes.socialLineButton}
                          >
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button
                            justIcon
                            link
                            className={classes.socialLineButton}
                          >
                            <i className="fab fa-google-plus-g" />
                          </Button>
                        </div>
                      </CardHeader>
                    </DialogTitle>
                    <DialogContent
                      id="login-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <form>
                        <p
                          className={
                            classes.description + " " + classes.textCenter
                          }
                        >
                          Or Be Classical
                        </p>
                        <CardBody className={classes.cardLoginBody}>
                          <CustomInput
                            id="login-modal-first"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Face className={classes.icon} />
                                </InputAdornment>
                              ),
                              placeholder: "First Name..."
                            }}
                          />
                          <CustomInput
                            id="login-modal-email"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Mail className={classes.icon} />
                                </InputAdornment>
                              ),
                              placeholder: "Email..."
                            }}
                          />
                          <CustomInput
                            id="login-modal-pass"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon className={classes.icon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password..."
                            }}
                          />
                        </CardBody>
                      </form>
                    </DialogContent>
                    <DialogActions
                      className={
                        classes.modalFooter + " " + classes.justifyContentCenter
                      }
                    >
                      <Button color="primary" simple size="lg">
                        Get started
                      </Button>
                    </DialogActions>
                  </Card>
                </Dialog>
                {/* LOGIN MODAL END */}
      
      
      
    </div>
  );
}

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';

import Fade from 'react-reveal/Fade';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Message us @ '}
      <Link color="inherit" href="https://material-ui.com/">
        Cuisine Lab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="contact-title" >
                <Fade top><h3>Need Help</h3></Fade>
                <Fade top><h1>Contact Us</h1></Fade>
            </div>
            <div className="contact-pose">
              <div className="contact-form" >
                  <Container component="main" maxWidth="xs">
                      <CssBaseline />
                      <div className={classes.paper}>
                          <Avatar className={classes.avatar} style={{backgroundColor:"#E366F6"}}>
                          <PhoneIcon />
                          </Avatar>
                          <Typography component="h4" variant="h6" align='center'>
                            Need Assistance? Message Us
                          </Typography>
                          <form className={classes.form} noValidate>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              fullWidth
                              id="name"
                              label="Name"
                              name="name"
                              autoComplete="name"
                              autoFocus
                          />
                          <TextField
                              variant="outlined"
                              margin="normal"
                              fullWidth
                              id="email"
                              label="Email"
                              name="email"
                              autoComplete="email"
                              autoFocus
                          />
                          <TextField
                              variant="outlined"
                              margin="normal"
                              fullWidth
                              id="message"
                              label="Message"
                              name="message"
                              autoFocus
                              multiline
                          />
                          <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              style={{backgroundColor:"#E366F6"}}
                          >
                              Submit
                          </Button>
                          </form>
                      </div>
                      <Box mt={8}>
                          <Copyright />
                      </Box>
                  </Container>
              </div>
              <Fade top>
                <div className="social">
                  <div className="social-list" >
                    <h2>Connect</h2>
                    <div>
                      <span className='contact-info' ><MailIcon />ENIGMA@GMAIL.COM</span><br/>
                      <span className='contact-info' ><PhoneIcon />+234-0000-0005</span>
                    </div>
                  </div>
                  <div className="social-list" >
                    <h2>Follow Us</h2>
                    <div className='social-icons'><FacebookIcon /><TwitterIcon /><InstagramIcon /><RedditIcon /></div>
                  </div>
                  <div className="social-list" >
                    <h2>Our Address</h2>
                    <div className='contact-info'><LocationOnIcon /> Middle of Somewhere</div>
                  </div>
                </div>
              </Fade>
            </div>
        </div>
    )
}

export default Contact

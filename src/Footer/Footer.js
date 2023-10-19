import React, { useState } from "react";
import { Grid, Container, Typography, Paper, IconButton, Input } from "@mui/material";
import {  ArrowForward, Facebook, Instagram,  LinkedIn, OutboundRounded, Twitter, YouTube } from "@mui/icons-material";


function Footer() {
  const footerStyle = {
    backgroundColor: "#333333",
    marginTop:200,
    height: "600px",
    color: "#919191", // Text color
  };
  const [emailText, setEmailText] = useState("Enter Email Address Here");

  const handleInputChange = (event) => {
    setEmailText(event.target.value);
  };
  return (

    <footer style={footerStyle}>
      <Container style={{marginLeft:'2%',paddingTop:80}}>
        <Grid container spacing={2} >
          {/* Row 1 */}
          <Grid item xs={2}>
            <Typography variant="h6" style={{marginBottom:10}}>Discover</Typography>
            <Typography variant="body2" style={{marginBottom:10}}>Work</Typography>
            <Typography variant="body2" style={{marginBottom:10}}>Services</Typography>
            <Typography variant="body2" style={{marginBottom:10}}>About</Typography>
            <Typography variant="body2" style={{marginBottom:10}}>Blog Archives</Typography>
            <Typography variant="body2" style={{marginBottom:10}}>Contact Us</Typography>
            
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" style={{marginBottom:10}}>Find Us On</Typography>
            <Typography variant="body2" style={{marginBottom:10}}> <Facebook style={{verticalAlign: 'middle',marginRight:10}}/>Facebook</Typography>
            <Typography variant="body2" style={{marginBottom:10}}><Instagram style={{verticalAlign: 'middle',marginRight:10}} />Instagram</Typography>
            <Typography variant="body2" style={{marginBottom:10}}><YouTube style={{verticalAlign: 'middle',marginRight:10}} /> Youtube</Typography>
            <Typography variant="body2" style={{marginBottom:10}}><LinkedIn style={{verticalAlign: 'middle',marginRight:10}} />LinkedIn</Typography>
            <Typography variant="body2" style={{marginBottom:10}}><Twitter style={{verticalAlign: 'middle',marginRight:10}} />Twitter</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Interested in keeping up-to-date about the latest in design trends in Manchester, England? We have got you coverd. </Typography>
            <Paper style={{ padding: "5px", display: "flex", alignItems: "center" }}>
            <Input
                value={emailText}
                onChange={handleInputChange}
                fullWidth
                disableUnderline
                color="#919191"
              />
              
              <IconButton style={{color:'#FFCC00'}}>
                <ArrowForward />
              </IconButton>
            </Paper>
            <Typography variant="body2">By subscribing to our newsletter you agree to our privacy policy and will get commercial communication.</Typography>
          </Grid>
          {/* Row 2 */}
          <Grid item xs={8} style={{marginTop:20}}>
            <Typography style={{marginBottom:20}}>Technologies We Use</Typography>
            <img src="/footer/sf.png" alt="sf"  style={{marginRight:40,width:30,height:30}}/>
            <img src="/footer/php.png" alt="php" style={{marginRight:40, marginBottom:5}}/>
            <img src="/footer/react.png" alt="react" style={{marginRight:40,width:30,height:30}} />
            <img src="/footer/v.png" alt="v" style={{marginRight:40,width:30,height:30}}/>
            <img src="/footer/vue.png" alt="vue" style={{marginRight:40,width:30,height:30}}/>
            <img src="/footer/u.png" alt="u" style={{marginRight:40,width:30,height:30}}/>
            <img src="/footer/wp.png" alt="wp" style={{marginRight:40,width:30,height:30}}/>
            <img src="/footer/woo.png" alt="woo" style={{marginRight:40,height:30}}/>
            <img src="/footer/js.png" alt="js" style={{marginRight:40,width:30,height:30}}/>
          </Grid>
          <Grid item xs={4}>
          <Paper style={{ padding: "5px", display: "flex", alignItems: "center",background:'#FFCC00',                justifyContent: "center",
 }}>
          <p style={{ marginTop: "5%" }}>
                Schedule A Free Discovery Session</p>
              
              <OutboundRounded style={{marginLeft:10}}/>
            </Paper>
          </Grid>

        </Grid>
      <hr width='120%' style={{marginTop:60}} />
      <Grid container style={{marginTop:60}}>
          <Grid item xs={6}>
              <Typography variant="h6">Level8Digital®</Typography>
          </Grid>
          <Grid item xs={6} style={{textAlign:'end'}}>
              <Typography variant="body2">Copyright ©2022 level8digital.com. All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;

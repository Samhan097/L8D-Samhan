import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  OutboundRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';

export default function CaseStudy() {
  
  return (
    <div>
      <Grid container style={{ marginTop: 80 }}>
        {/* Left-side content on the left side */}
        <Grid item xs={12} sm={12} md={2} lg={2} xl={4} style={{marginLeft:'3%'}}>
          <p style={{color:'#B8B8B8'}}> Featured Case Study</p>
          <h2>Glossier UK Website Design</h2>
          <p style={{color:'#6E6E6E'}}>
            Elon is the Nordic region's largest retail chain for consumer electronics and home appliances, with over 400 stores in Sweden alone. Learn about their recent new online store launch on the Magento Commerce below.
          </p>
          <p style={{lineHeight:'1.5'}}>
            View Case Study
            <OutboundRounded style={{ color: 'yellow', verticalAlign: 'middle', marginLeft: 10 }} />
          </p>
          <p style={{marginTop:260,color:'#6E6E6E33'}}>A Few Highlights of The
Projects We’ve Undertaken At Level8</p>
        </Grid>
        {/* Right-side content with the background image */}
        <Grid item xs={12} sm={12} md={9} lg={9} xl={8} style={{marginLeft:'auto',marginRight:50}}>
          <img 
            src="/home/img-2.png"
            alt="img-2"
            style={{
              width: '100%', // Adjust the width as needed
              maxHeight: '40vh', // Adjust the height as needed
              marginBottom:'20px'
            }}
          />
          <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={2.9} xl={6} style={{marginRight:10}}>
          <img
              src="/home/img-3.png"
              alt="img-3"
              style={{

              width: '100%', // Adjust the width as needed
              maxHeight: '40vh', // Adjust the height as needed
            }}
            />
          <p>Apollo Website Design</p>
          <p style={{color:'#B8B8B8'}}>Website Work</p>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2.9} xl={6} style={{marginRight:10}}>
          <img
              src="/home/img-4.png"
              alt="img-4"
              style={{
              width: '100%', // Adjust the width as needed
              maxHeight: '42vh', // Adjust the height as needed
            }}
            />
            <p>Cenita Marketing Campaign</p>
          <p style={{color:'#B8B8B8'}}>Marketing</p>
            </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2.9} xl={6} style={{marginRight:10}}>
          <img
              src="/home/img-5.png"
              alt="img-5"
              style={{
              width: '100%', // Adjust the width as needed
              maxHeight: '40vh', // Adjust the height as needed
            }}
            />
            <p>Resurgence Brand Takeover</p>
          <p style={{color:'#B8B8B8'}}>Branding</p>
            </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2.9} xl={6} >
          <img
              src="/home/img-6.png"
              alt="img-6"
              style={{
              width: '100%', // Adjust the width as needed
              maxHeight: '40vh', // Adjust the height as needed
            }}
            />
            <p>Lamaran Garage</p>
          <p style={{color:'#B8B8B8'}}>Branding</p>
            </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid container style={{marginTop:200}}>
      <Grid item xs={12} sm={12} md={5} lg={5.6} xl={6} style={{background:'#333333',marginLeft:'3%',color:'white'}} >
            <div style={{margin:50,marginTop:80}}>
            <hr
                style={{
                  border: "2px solid #FFCC00",
                  width: "180px",
                  marginLeft: "0",
                }}
              />
              <h2 style={{marginTop:30}}>We Belive In The <br />Simplicity Of Good Solutions</h2>
              <p style={{maxWidth:280,color:'#6E6E6E'}}>Elon is the Nordic region's largest retail chain for consumer electronics and home appliances, with over 400 stores in Sweden alone. Learn about their recent new online store launch on the Magento Commerce below.</p>
              <p style={{marginTop:50}}>View All Our Services
            <OutboundRounded style={{ color: '#FFCC00', verticalAlign: 'middle', marginLeft: 10 }} />
              
              </p>
            </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5.6} xl={6} >
      <Grid container >
        <Grid item xs={12} sm={12} md={5} lg={12} xl={6}>
          <Grid container >
            <Grid item xs={12} sm={12} md={5} lg={12} xl={6} style={{ background: '#FFCC00', height: 300 }}>
              <div style={{marginTop:220,marginLeft:'3%'}}>
                <h2 style={{fontSize:60,color:'#333333',letterSpacing:-3}}>Branding
                <FontAwesomeIcon style={{transform: 'rotate(45deg)',marginLeft:'55%'}} icon={faArrowUp} />
                </h2>
                
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={12} xl={6} style={{ background: '#333333', height: 300 }}>
            <div style={{marginTop:220,marginLeft:'3%'}}>
                <h2 style={{fontSize:60,color:'#FFCC00',letterSpacing:-3}}>Development
                <FontAwesomeIcon style={{transform: 'rotate(45deg)',marginLeft:'40%'}} icon={faArrowUp} />
                </h2>
                
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      </Grid>
      

      </Grid>
      
      
    </div>
    
  );
}

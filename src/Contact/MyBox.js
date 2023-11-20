import React from 'react';
import {  OutboundRounded } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

function MyBox() {
  return (
    <Grid container style={{marginTop:200}}>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={6} style={{background:'#333333',color:'white'}} >
            <div style={{marginLeft:50,marginTop:70}}>
            <hr
                style={{
                  border: "2px solid #FFCC00",
                  width: "180px",
                  marginLeft: "0", 
                }}
              />
              <h1 style={{marginTop:30}}>Come Visit Our Offices <br />For A Discovery Call</h1>
              <p style={{color:'#6E6E6E'}}>Our offices are located in Manchester,England</p>
              <p style={{paddingTop:130}}>hello@level8digital.com
            <OutboundRounded style={{ color: '#FFCC00', verticalAlign: 'middle', marginLeft: 10 }} />
              
              </p>
            </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={7} xl={6} >
      
        <img src="/contact/img-1.png" alt="img-1" style={{ width: '100%' }} />
                
              

      </Grid>
      

      </Grid>
  );
}

export default MyBox;

import { Grid } from '@mui/material'
import React from 'react'

const MyGrid = () => {
  return (
    <Grid container style={{ marginTop: 100, marginBottom:100 }}>
  
  {/* Add four columns */}
  <Grid item xs={12} sm={12} md={3} lg={5} xl={3} style={{marginLeft:'3%' ,color:'black'}}>
   <p style={{ fontSize: 34, marginTop: 0,marginBottom:0 }}>
  The <span style={{ color: '#FFCC00' }}>Level8Team</span> is All About <br /> The Greatest Results Possible
</p>
  

  </Grid>
  

  <Grid item xs={12} sm={12} md={3} lg={2.7} xl={3} style={{marginLeft:'3%' ,color:'#6E6E6E80'}}>
    
     <p style={{  paddingBottom: '10px' }}>
     We are a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C</p>

  </Grid>
  
  <Grid item xs={12} sm={12} md={3} lg={2.7} xl={3} style={{marginLeft:'3%' ,color:'#6E6E6E80'}}>
     <p style={{  paddingBottom: '10px' }}>
     Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for </p>
 
  </Grid>
  
</Grid>
  );
};

export default MyGrid;

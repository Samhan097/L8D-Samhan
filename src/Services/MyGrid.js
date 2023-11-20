import { Grid } from '@mui/material'
import React from 'react'

const MyGrid = () => {
  return (
    <Grid container style={{ marginTop: 100, marginBottom:100 }}>
  
  {/* Add four columns */}
  <Grid item xs={12} sm={12} md={3} lg={3.5} xl={3} style={{marginLeft:'3%' ,color:'black'}}>
   <p style={{color:'#6E6E6E80'}}>Holistic Process</p>
   <p style={{ fontSize: 44, marginTop: 0,marginBottom:0 }}>
  <span style={{ color: '#FFCC00' }}>Connecting</span> You To The World
</p>
     <p style={{  paddingBottom: '10px' }}>
     Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for </p>

  </Grid>
  
  <Grid item xs={12} sm={12} md={3} lg={2.1} xl={3} style={{marginLeft:'3%' ,color:'black'}}>
    
   <p style={{color:'#6E6E6E80',marginTop:120}}>Discovery </p>
     <p style={{  paddingBottom: '10px' }}>
     Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for </p>

  </Grid>

  <Grid item xs={12} sm={12} md={3} lg={2.1} xl={3} style={{marginLeft:'3%' ,color:'black'}}>
    
   <p style={{color:'#6E6E6E80',marginTop:120}}>Production</p>
     <p style={{  paddingBottom: '10px' }}>
     We are a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C</p>

  </Grid>
  
  <Grid item xs={12} sm={12} md={3} lg={2.1} xl={3} style={{marginLeft:'3%' ,color:'black'}}>
   <p style={{color:'#6E6E6E80',marginTop:120}}>Handoff</p>
     <p style={{  paddingBottom: '10px' }}>
     Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for </p>
 
  </Grid>
  
</Grid>
  );
};

export default MyGrid;

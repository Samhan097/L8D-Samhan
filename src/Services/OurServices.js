import { Grid, Typography } from '@mui/material';
import React from 'react'

export default function OurServices() {
  return (
    <Grid container style={{ marginTop: 100, background: '#FFCC00', height: 400,marginRight:'3%' }}>
  <Grid item xs={5} style={{marginTop:50,marginLeft:'3%'}}>
  
        <Typography variant='h3' style={{ marginBottom:200 }}>Our Services</Typography>
        <Typography style={{color:'#00000066'}}>Services We Provide In Branding</Typography>
      </Grid>
      <Grid item xs={3} style={{marginTop:50}}>
        <Typography variant='body2' style={{ marginBottom:20 }}>Two philosophies guide us through the work we do. We believe in creating designs that combine the best developmental practices with the best business practices.</Typography>
        <Typography>Thirty projects strong and still going forward! Level8 has completed a successful 30 different case studies by the best developmental practices with the best business practices.</Typography>
        <Typography style={{color:'#00000066',marginTop:80}}>How We Approach Branding</Typography>
      </Grid>
      <Grid item xs={3} style={{textAlign: 'end',marginTop:50}}>
        <Typography variant="h2" style={{  marginLeft: 'auto' }}>
        11
        </Typography>
        <Typography style={{color:'#00000066',marginTop:180}}>11 Disciplines of Branding</Typography>
      </Grid>
  
</Grid>

  )
}

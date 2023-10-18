import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@mui/material'
import React from 'react'

export default function Clients() {
  return (
    <Grid container style={{ marginTop: 100, background: '#333333', height: 600 }}>
  <Grid item xs={12} sm={12} md={2} lg={9} xl={4} style={{ marginLeft: '3%', color: 'white' }}>
    <h2 style={{ fontSize: '60px',maxWidth:500 }}>Clients We’ve Worked With</h2>
  </Grid>
  <Grid item xs={12} sm={12} md={2} lg={2} xl={4} style={{ textAlign:'right' }}>
    <p style={{ color: '#DEDEDE4D', marginTop:50}}>Over our 8-year career<br /> we’ve worked with over 50 companies
    </p>
<div style={{color:'#FFCC004D',marginTop:60}}>
    <FontAwesomeIcon icon={faCircleArrowLeft} style={{marginRight:10}}/>
    <FontAwesomeIcon icon={faCircleArrowRight} />

</div>

  </Grid>
  {/* Add four columns */}
  <Grid item xs={12} sm={12} md={3} lg={2.5} xl={3} style={{marginLeft:'3%' ,color:'white'}}>
    <h4 style={{marginBottom:-15,fontSize:32,color:'#008FFF',marginLeft:'28%'}}>
    {'>'}
     </h4>
     <h4 style={{fontSize:32,marginTop:0}}>accenture</h4>
     <p style={{ borderBottom: '1px dashed #DEDEDE4D', paddingBottom: '10px' }}>
     “When looking for someone to do a good job in a tight time frame, it can prove difficult or expensive. I was very happy with the work done by Creative Brand Design, I had to have a website up and running before the start of my season and they were able to get it done with time to spare.”</p>
{/* Add the following two columns below the existing content */}
<Grid container>
  <Grid item xs={12} sm={12} md={3} lg={6} xl={3} style={{fontSize:14}}>
        <p>Branding Services For</p>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={4} xl={3} style={{ marginLeft: 'auto',marginRight:'3%' ,fontSize:14}}>
        <p>John Doe - CEO </p>
      </Grid>
  </Grid>
  </Grid>
  
  <Grid item xs={12} sm={12} md={3} lg={2.5} xl={3} style={{marginLeft:'3%' ,color:'#DEDEDE4D'}}>
    <h4 style={{marginBottom:-15,fontSize:32,color:'#008FFF',marginLeft:'28%'}}>
    {'>'}
     </h4>
     <h4 style={{fontSize:32,marginTop:0}}>accenture</h4>
     <p style={{ borderBottom: '1px dashed #DEDEDE4D', paddingBottom: '10px' }}>
     “When looking for someone to do a good job in a tight time frame, it can prove difficult or expensive. I was very happy with the work done by Creative Brand Design, I had to have a website up and running before the start of my season and they were able to get it done with time to spare.”</p>
{/* Add the following two columns below the existing content */}
<Grid container>
  <Grid item xs={12} sm={12} md={3} lg={6} xl={3} style={{fontSize:14}}>
        <p>Branding Services For</p>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={4} xl={3} style={{ marginLeft: 'auto',marginRight:'3%' ,fontSize:14}}>
        <p>John Doe - CEO </p>
      </Grid>
  </Grid>
  </Grid>

  <Grid item xs={12} sm={12} md={3} lg={2.5} xl={3} style={{marginLeft:'3%' ,color:'#DEDEDE4D'}}>
    <h4 style={{marginBottom:-15,fontSize:32,color:'#008FFF',marginLeft:'28%'}}>
    {'>'}
     </h4>
     <h4 style={{fontSize:32,marginTop:0}}>accenture</h4>
     <p style={{ borderBottom: '1px dashed #DEDEDE4D', paddingBottom: '10px' }}>
     “When looking for someone to do a good job in a tight time frame, it can prove difficult or expensive. I was very happy with the work done by Creative Brand Design, I had to have a website up and running before the start of my season and they were able to get it done with time to spare.”</p>
{/* Add the following two columns below the existing content */}
<Grid container>
  <Grid item xs={12} sm={12} md={3} lg={6} xl={3} style={{fontSize:14}}>
        <p>Branding Services For</p>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={4} xl={3} style={{ marginLeft: 'auto',marginRight:'3%' ,fontSize:14}}>
        <p>John Doe - CEO </p>
      </Grid>
  </Grid>
  </Grid>
  
  <Grid item xs={12} sm={12} md={3} lg={2.5} xl={3} style={{marginLeft:'3%' ,color:'#DEDEDE4D'}}>
    <h4 style={{marginBottom:-15,fontSize:32,color:'#008FFF',marginLeft:'28%'}}>
    {'>'}
     </h4>
     <h4 style={{fontSize:32,marginTop:0}}>accenture</h4>
     <p style={{ borderBottom: '1px dashed #DEDEDE4D', paddingBottom: '10px' }}>
     “When looking for someone to do a good job in a tight time frame, it can prove difficult or expensive. I was very happy with the work done by Creative Brand Design, I had to have a website up and running before the start of my season and they were able to get it done with time to spare.”</p>
    {/* Add the following two columns below the existing content */}
<Grid container>
  <Grid item xs={12} sm={12} md={3} lg={6} xl={3} style={{fontSize:14}}>
        <p>Branding Services For</p>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={4} xl={3} style={{ marginLeft: 'auto',marginRight:'3%' ,fontSize:14}}>
        <p>John Doe - CEO </p>
      </Grid>
  </Grid>
  </Grid>
  
</Grid>

  )
}

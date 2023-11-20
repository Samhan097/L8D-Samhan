import React from 'react';
import { Typography,  Grid } from '@mui/material';
import AppBar2 from '../AppBar/AppBar2';
import {  NorthEast } from '@mui/icons-material';

const Hero = () => {
  const backgroundImageUrl = 'work/img-1.png'; // Replace with your image URL

  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    width: '100%',
    marginBottom:100
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    color:'white',
    marginTop:'5%'
  };

  const textStyles = {
   
  };

  return (
    <div style={styles}>
      <AppBar2 />
        <Grid container style={contentStyles}>
          <Grid item xs={9} style={{marginLeft:'3%'}}>
              <Typography variant="h3" style={textStyles}>
                Services
              </Typography>
          </Grid>
          <Grid item xs={1} style={{marginLeft:'13%'}}>
              <NorthEast style={{fontSize:60}} />
          </Grid>
        </Grid>
    </div>
  );
};

export default Hero;

import { NorthEast } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';

export default function DesignBox4() {
  const numRows = 2;
  const numColumns = 10;
  
  const arrowStyle = {
    fontSize: 100,
    color: '#FFFFFF33',
  };

  return (
    <div>
      <Grid container style={{ marginTop: 200 }}>
        <Grid item xs={12} sm={12} md={5} lg={8} xl={6} style={{ background: '#33333366', marginLeft: '29%', height: 450 }}>
          {/* Content for the left grid item */}
          <Grid container spacing={1} style={{  }}>
            {[...Array(numRows * (numColumns + 6))].map((_, index) => (
              <Grid item xs={3} md={1} lg={1.5} key={index}>
                <NorthEast style={arrowStyle} />
              </Grid>
            ))}
          </Grid>
          <Grid container style={{ justifyContent: 'space-between' }}>
            <Grid item xs={12} md={9} style={{ marginRight: '30px' }}>
              <p>Brand Photography</p>
            </Grid>
            <Grid item xs={12} md={1} style={{paddingLeft:60}}>
              <p>06</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

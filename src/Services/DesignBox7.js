import { Grid } from '@mui/material';
import React from 'react';

export default function DesignBox3() {
  return (
    <div>
      <Grid container style={{ marginTop: 200 }}>
        <Grid item xs={12} sm={12} md={5} lg={5.8} xl={6} style={{ background: '#FFCC00', marginLeft: '3%', height: 180 }}>
          {/* Content for the left grid item */}
          <Grid container style={{marginTop:170}}>
            <Grid item xs={12} md={11} style={{marginRight:'auto'}}>
              <p>Copywriting</p>
            </Grid>
            <Grid item xs={12} md={1} style={{marginRight:'-40px'}}>
              <p>10</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5.1} xl={6} style={{ background: '#333333', marginRight: '3%', height: 300, marginLeft: '1%' }}>
          {/* Content for the right grid item */}
          <Grid container style={{marginTop:290}}>
            <Grid item xs={12} md={6} style={{marginRight:'auto'}}>
              <p>Website Maintenance</p>
            </Grid>
            <Grid item xs={12} md={6} style={{marginRight:'-300px'}}>
              <p>11</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ); 
}
 
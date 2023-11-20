import { Grid } from '@mui/material';
import React from 'react';

export default function DesignBox1() {
  return (
    <div>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item xs={12} sm={12} md={5} lg={5.8} xl={6} style={{ background: '#FFCC00', marginLeft: '3%', height: 300 }}>
          {/* Content for the left grid item */}
          <Grid container style={{marginTop:290}}>
            <Grid item xs={12} md={11} style={{marginRight:'auto'}}>
              <p>Logo Design</p>
            </Grid>
            <Grid item xs={12} md={1} style={{marginRight:'-40px'}}>
              <p>01</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5.1} xl={6} style={{ background: '#333333', marginRight: '3%', height: 180, marginLeft: '1%' }}>
          {/* Content for the right grid item */}
          <Grid container style={{marginTop:170}}>
            <Grid item xs={12} md={6} style={{marginRight:'auto'}}>
              <p>Identity Design</p>
            </Grid>
            <Grid item xs={12} md={6} style={{marginRight:'-300px'}}>
              <p>02</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
 
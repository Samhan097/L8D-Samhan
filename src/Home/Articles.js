import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@mui/material'
import React from 'react'

export default function Articles() {
  return (
    <div>
    <Grid container spacing={16} >
          <Grid item xs={12} sm={12} md={4} lg={3.7} xl={6} style={{marginLeft:'3%'}}>
      <h2>We believe in an even 
playing field for all.</h2>
<p style={{ marginTop: "5%" }}>
Browse Our Entire Collection of Articles                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "19%" }}
                />
              </p>
              <hr
                style={{
                  border: "2px solid #FFCC00",
                  width: "370px",
                  marginLeft: "0",
                }}
              />
      
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={3.7} xl={6}>
      <p style={{fontFamily:'',color:'#B8B8B8'}}>
      We are a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.
      </p>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={3.7} xl={6} style={{marginRight:'3%'}}>
      <p style={{color:'#B8B8B8'}}>
      We are a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.
      </p>
    </Grid>
  </Grid>
  
  </div>
  )
}

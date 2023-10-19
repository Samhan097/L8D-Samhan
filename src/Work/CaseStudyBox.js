import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { OutboundRounded } from "@mui/icons-material";

const CaseStudyBox = () => {
  return (
    <Grid
      container
      style={{ backgroundColor: "black" }}
      justifyContent="center"
    >
      <Grid item xs={6}>
        <Box
          sx={{
            margin: 2,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            borderRight: "1px solid #DEDEDE", // Vertical divider
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <Typography variant="body2" style={{ color: "#B8B8B8" }}>
                Website Work
              </Typography>
              <Typography variant="h5" style={{ marginBottom: "5%" }}>
                Apollo Website Design
              </Typography>
              <Typography variant="body2" style={{ color: "#FFFFFF80" }}>
                Level 8 Digital is a leading full-service omnichannel agency
                building digital experiences for clients across the globe. Our
                goal is to accelerate sales for our B2B and B2C clients by
                delivering award-winning digital storefronts, solutions and
                mobile apps.
              </Typography>
              <Grid container style={{marginTop:'25%'}}>
              <Grid item xs={11}>
              <Typography variant="h6" style={{ display: "flex", alignItems: "center" }}>
                    View Case Study
                    <OutboundRounded style={{ marginLeft: 20 }} />
                  </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5" style={{color:'#FFFFFF66'}}>2/5</Typography>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <img
                src="/work/img-5.png"
                alt="im-5"
                style={{ width: "80%", height: "auto", marginLeft: "15%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            margin: 2,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <Typography variant="body2" style={{ color: "#B8B8B8" }}>
                Website Work
              </Typography>
              <Typography variant="h5" style={{ marginBottom: "5%" }}>
                Apollo Website Design
              </Typography>
              <Typography variant="body2" style={{ color: "#FFFFFF80" }}>
                Level 8 Digital is a leading full-service omnichannel agency
                building digital experiences for clients across the globe. Our
                goal is to accelerate sales for our B2B and B2C clients by
                delivering award-winning digital storefronts, solutions and
                mobile apps.
              </Typography>
              <Grid container style={{marginTop:'25%'}}>
              <Grid item xs={11}>
              <Typography variant="h6" style={{ display: "flex", alignItems: "center" }}>
                    View Case Study
                    <OutboundRounded style={{ marginLeft: 20 }} />
                  </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5" style={{color:'#FFFFFF66'}}>2/5</Typography>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={6}>
             
              <img
                src="/work/img-6.png"
                alt="img-6"
                style={{ width: "80%", height: "auto", marginLeft: "15%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CaseStudyBox;

import React from "react";
import { Grid, Box } from "@mui/material";
import { OutboundRounded } from "@mui/icons-material";

const Card1 = () => {
  return (
    <Grid
      container
      style={{ backgroundColor: "" }}
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
            color: "black",
            borderRight: "1px solid #DEDEDE", // Vertical divider
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <p  style={{ color: "#B8B8B8" }}>
                Website Work
              </p>
              <h2 style={{ marginBottom: "5%" }}>
              Why Understanding Your Tools Is Essential
              </h2>
              <p  style={{ color: "#33333380" }}>
                Level 8 Digital is a leading full-service omnichannel agency
                building digital experiences for clients across the globe. Our
                goal is to accelerate sales for our B2B and B2C clients by
                delivering award-winning digital storefronts, solutions and
                mobile apps.
              </p>
              <Grid container style={{marginTop:'25%'}}>
              <Grid item xs={11}>
              <p  style={{ display: "flex", alignItems: "center" }}>
              Schedule A Free Discovery Session
                    <OutboundRounded style={{ marginLeft: 20 }} />
                  </p>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <img
                src="/home/img-7.png"
                alt="im-7"
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
            color: "black",
          }}
        >
          <Grid container>
          <Grid item xs={6}>
              {" "}
              <p  style={{ color: "#B8B8B8" }}>
                Website Work
              </p>
              <h2 style={{ marginBottom: "5%" }}>
              Why Understanding Your Tools Is Essential
              </h2>
              <p  style={{ color: "#33333380" }}>
                Level 8 Digital is a leading full-service omnichannel agency
                building digital experiences for clients across the globe. Our
                goal is to accelerate sales for our B2B and B2C clients by
                delivering award-winning digital storefronts, solutions and
                mobile apps.
              </p>
              <Grid container style={{marginTop:'25%'}}>
              <Grid item xs={11}>
              <p  style={{ display: "flex", alignItems: "center" }}>
              Schedule A Free Discovery Session
                    <OutboundRounded style={{ marginLeft: 20 }} />
                  </p>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={6}>
             
              <img
                src="/home/img-7.png"
                alt="img-7"
                style={{ width: "80%", height: "auto", marginLeft: "15%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <hr width='95%' style={{marginTop:60,borderColor:'#DEDEDE30'}} />

    </Grid>
  );
};

export default Card1;

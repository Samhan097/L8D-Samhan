import React from "react";
import Grid from "@mui/material/Grid";
import AppBar1 from "../AppBar/AppBar1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div>
      <div className="appbar-1">
        <AppBar1 />
      </div>
      <div style={{ display: "flex" }}>
        <Grid container>
          {/* Left-side content on the left side */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div
              style={{ padding: "20px", marginLeft: "3%", marginTop: "10%" }}
            >
              <h2>
                The
                <br />
                Most Ambitious <br />
                Companies Hire Us
              </h2>
              <p style={{ marginTop: "5%" }}>
                Schedule A Free Discovery Session
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "19%" }}
                />
              </p>
              <hr
                style={{
                  border: "2px solid black",
                  width: "400px",
                  marginLeft: "0",
                }}
              />
              <img
                src="/home/title.png"
                alt="title"
                style={{ marginTop: "20%" }}
              />
              <Grid container spacing={16}>
                <Grid item md={6}>
                  <h2>Driving Success In Digital Commerce</h2>
                  <p style={{fontFamily:'',color:'#6E6E6E'}}>
                    Level 8 Digital is a leading full-service omnichannel agency
                    building digital experiences for clients across the globe.
                    Our goal is to accelerate sales for our B2B and B2C clients
                    by delivering award-winning digital storefronts, solutions
                    and mobile apps.
                  </p>
                </Grid>
                <Grid item md={6}>
                  <h2>Here Is What You Should Do For Design</h2>
                  <p style={{color:'#6E6E6E'}}>
                    Level 8 Digital is a leading full-service omnichannel agency
                    building digital experiences for clients across the globe.
                    Our goal is to accelerate sales for our B2B and B2C clients
                    by delivering award-winning digital storefronts, solutions
                    and mobile apps.
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>

          {/* Right-side content with the background image */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              src="/home/img-1.png"
              alt="img-1"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100vh",
              }}
            />
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

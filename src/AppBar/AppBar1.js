import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import "../App.css"
import { Link } from "react-router-dom";

export default function AppBar1() {
  return (
    <div className="appbar-1">
      <Toolbar className="toolbar-1">
       {/* Logo */}
       <div className="logo-yellow">
          <img
            src="home/logo-yellow.png"
            alt="Logo"
            style={{
              marginLeft: "20px",  
              marginRight: "20px", 
               
            }}
          />
        </div>

        <Grid container alignItems="center" justifyContent="center">
          {/* Menu Buttons */}
          <Hidden smDown>
            <Grid item>
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform:"capitalize",
                  fontWeight:"bold"
                }}
                className="home-button"
              >
                Home
              </Button>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item>
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform:"capitalize",
                  fontWeight:"bold"
                }}
                className="service-button"
              >
                Services
              </Button>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item>
            <Link to="/work"> {/* Use Link to navigate to the "Work" page */}
                <Button
                  color="primary"
                  size="small"
                  style={{
                    borderRadius: "50px",
                    color: "black",
                    borderColor: "none",
                    margin: "0 15px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                  className="work-button"
                >
                  Work
                </Button>
              </Link>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item>
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform:"capitalize",
                  fontWeight:"bold"
                }}
                className="about-button"
              >
                About
              </Button>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item>
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform:"capitalize",
                  fontWeight:"bold"
                }}
                className="blog-button"
              >
                Blog
              </Button>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item>
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform:"capitalize",
                  fontWeight:"bold"
                }}
                className="contact-button"
              >
                Contact
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </div>
  );
}

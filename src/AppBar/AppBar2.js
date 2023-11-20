import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import { Link } from "react-router-dom";

export default function AppBar2() {
  return (
    <div className="appbar-2" >
      <Toolbar className="toolbar-2">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid item>
            <div className="logo-white">
              <img
                src="home/logo-white.png"
                alt="Logo"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              />
            </div>
          </Grid>

          {/* Menu Buttons */}
          <Grid item>
            <Hidden smDown>
              {/* Your existing buttons */}
              <Link to="/" >
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "white", // Change color to white
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
                className="home-button"
              >
                Home
              </Button>
</Link>
              <Link to="/services">
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "white", // Change color to white
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
                className="service-button"
              >
                Services
              </Button>
              </Link>
               {/* Use Link to navigate to the "Work" page */}
              <Link to="/work">
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "white", // Change color to white
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
            <Link to="/about"> 
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "white", // Change color to white
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
                className="about-button"
              >
                About
              </Button>
              </Link>

{/* Use Link to navigate to the "Blog" page */}
            <Link to="/blog"> 
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "white", // Change color to white
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
                className="blog-button"
              >Blog
              </Button>
</Link>
            <Link to="/contact"> 
              <Button
                color="primary"
                size="small"
                style={{
                  borderRadius: "50px",
                  color: "white", // Change color to white
                  borderColor: "none",
                  margin: "0 15px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
                className="contact-button"
              >
                Contact
              </Button>
              </Link>

            </Hidden>
          </Grid>

          {/* "Let's Talk" Button */}
          <Grid item>
            <Button
              color="primary"
              size="small"
              style={{
                borderRadius: "50px",
                color: "white",
                borderColor: "none",
                marginRight: "20px", // Adjust margin as needed
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              className="lets-talk-button"
            >
              Let's Talk
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

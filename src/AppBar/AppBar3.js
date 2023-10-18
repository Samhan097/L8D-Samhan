import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function AppBar3() {
  return (
    <div className="appbar-3" style={{ background: "black" }}>
      <Toolbar className="toolbar-3">
      <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo or Image on the Left */}
          <Grid item>
            <img
              src="home/logo.png" // Replace with your image URL
              alt="Logo"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                height: "40px", // Adjust the height as needed
              }}
            />
          </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end" // Align items to the right
        >
          {/* Menu Buttons */}
          <Grid item>
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
          </Grid>

          <Grid item>
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
          </Grid>

          <Grid item>
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
          </Grid>

          <Grid item>
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
          </Grid>

          <Grid item>
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
            >
              Blog
            </Button>
          </Grid>

          <Grid item>
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
          </Grid>
        </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

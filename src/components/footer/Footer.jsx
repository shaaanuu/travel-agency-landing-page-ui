import React from "react";
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./Footer.css";

const DefaultFooter = () => (
  <footer className="aesthetic-footer">
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" className="footer-title">
            Connect with Us
          </Typography>
          <div className="social-icons">
            <IconButton>
              <Link href="#" target="_blank">
                <Facebook fontSize="large" />
              </Link>
            </IconButton>
            <IconButton>
              <Link href="#" target="_blank">
                <Twitter fontSize="large" />
              </Link>
            </IconButton>
            <IconButton>
              <Link href="#" target="_blank">
                <Instagram fontSize="large" />
              </Link>
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" className="footer-title">
            About Us
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            fugit!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" className="footer-title">
            Contact Us
          </Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default DefaultFooter;

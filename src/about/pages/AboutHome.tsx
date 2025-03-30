import React from "react";
import AboutAppBar from "../components/AboutAppBar";
import AboutToolbar from "../components/AboutToolbar";
import ToolbarWidget from "../components/ToolbarWidget";
import { Grid, Paper, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

const AboutHome = () => {
  return (
    <React.Fragment>
      <AboutAppBar>
        <AboutToolbar title="About this site">
          <ToolbarWidget />
        </AboutToolbar>
      </AboutAppBar>
        <Paper elevation={5}>
          <Grid container direction="column" >
            <Grid item p={3}>
              <div style={{ display: "inline-flex", gap: 10 }}>
                  <BuildIcon />
                  <Typography variant="h5">
                     Tools used 
                 </Typography>
              </div>
            </Grid>
            <Grid item p={1}>
              <ul>
                <li>React (17.0.0)</li>
                <li>Typescript (4.1.2)</li>
                <li>Material-UI (5.0.0)</li>
                <li>gh-pages (3.1.0)</li>
                <li>lightgallery (2.8.3)</li>
                <li>recharts (2.0.9)</li>
              </ul>
            </Grid>
            <Grid item p={3}>
                <Typography variant="body1">
                   More about React github pages:
                </Typography>
                <Typography variant="body2">
                   https://github.com/gitname/react-gh-pages
                </Typography>
            </Grid>
            <Grid item p={3}>
                <Typography variant="body1">
                   More about React lightgallery:
                </Typography>
                <Typography variant="body2">
                  https://www.lightgalleryjs.com/ 
                </Typography>
            </Grid>
          </Grid>
        </Paper>
    </React.Fragment>
  );
};

export default AboutHome;

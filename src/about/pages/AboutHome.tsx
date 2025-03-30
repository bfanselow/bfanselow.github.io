import React from "react";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import ToolbarWidget from "../components/ToolbarWidget";
import { Grid, Typography } from "@material-ui/core";

const AboutHome = () => {
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title="About this site">
          <ToolbarWidget />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container direction="column" spacing={2}>
          <Grid item display="flex" justifyContent="center">
            Tools that make up this site 
        </Grid>
        <Grid item>
            <Typography variant="body2">
                Placeholder 
            </Typography>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AboutHome;

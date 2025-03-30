import React from "react";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import ToolbarWidget from "../components/ToolbarWidget";
import { Grid, Typography } from "@material-ui/core";

const SoftwareHome = () => {
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title="Software">
          <ToolbarWidget />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container direction="column" spacing={2}>
          <Grid item display="flex" justifyContent="center">
            Let's write some code! 
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

export default SoftwareHome;

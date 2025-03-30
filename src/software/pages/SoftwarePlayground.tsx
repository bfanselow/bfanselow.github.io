import React from "react";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import ToolbarWidget from "../components/ToolbarWidget";
import { Grid, Typography } from "@material-ui/core";

const SoftwarePlayground = () => {
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title="Software Playground">
          <ToolbarWidget />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container direction="column" spacing={2}>
          <Grid item display="flex" justifyContent="center">
            Playground Placeholder 
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

export default SoftwarePlayground;

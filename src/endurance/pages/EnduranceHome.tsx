import React from "react";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import ToolbarWidget from "../components/ToolbarWidget";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";

const EnduranceHome = () => {
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title="Endurance">
          <ToolbarWidget />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container direction="column" spacing={2}>
          <Grid item display="flex" justifyContent="center">
            <Card sx={{ maxWidth: 1200 }}>
                <CardMedia
                    component="img"
                    image="/img/prefontaine.webp"
                />
            </Card>
        </Grid>
        <Grid item>
            <Typography variant="body1">
      It is not the critic who counts; not the man who points out how the strong
man stumbles, or where the doer of deeds could have done them better.
The credit belongs to the man who is actually in the arena, whose face is
marred by dust and sweat and blood; who strives valiantly; who errs, who
comes short again and again, because there is no effort without error and
shortcoming; but who does actually strive to do the deeds; who knows
great enthusiasms, the great devotions; who spends himself in a worthy
cause; who at the best knows in the end the triumph of high achievement,
and who at the worst, if he fails, at least fails while daring greatly, so that
his place shall never be with those cold and timid souls who neither know
victory nor defeat.
            </Typography>
            <Typography variant="body2">
                ~ Theodore Roosevelt
            </Typography>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default EnduranceHome;

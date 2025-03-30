import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import PhotosAppBar from "../components/PhotosAppBar";
import PhotosToolbar from "../components/PhotosToolbar";
import { Box, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";

import "./stylesHome.css"

// Taken from https://material-ui.com/guides/composition/#link
// Connects our MaterialUI components with our react router history.
// Without this routing would not trigger properly and every page would just reload rather than be a SPA
const HistoryLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
    <RouterLink ref={ref} {...props} />
))

const Home = () => {
  return (
    <React.Fragment>
      <PhotosAppBar>
        <PhotosToolbar title="Photo Albums">
           Click on a Category to open an Album 
        </PhotosToolbar>
      </PhotosAppBar>
      <Box>
          <Grid container direction="column" spacing={8}>
            <Grid item>
              <Grid container direction="row" spacing={3} justifyContent="flex-start">
                <Grid item sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  RUN
                  <Link component={HistoryLink} to="/photos/run">
                      <img src="/img/bill-steamboat-rrr.jpeg" alt="bill-steamboat-rrr.jpeg" />
                  </Link>
                </Grid>
                <Grid item sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  BIKE 
                  <Link component={HistoryLink} to="/photos/bike">
                      <img src="/img/bill-ned-gravel-2024.jpg" alt="bill-ned-gravel-2024" />
                  </Link>
                </Grid>
                <Grid item sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  SKI 
                  <Link component={HistoryLink} to="/photos/ski">
                       <img src="/img/mt-cb-jack.jpg" alt="mt-cb-jack" />
                  </Link>
                </Grid>
                <Grid item sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  NATURE 
                  <Link component={HistoryLink} to="/photos/nature">
                      <img src="/img/grand-junction-rocks.jpeg" alt="grand-junction-rocks" />
                  </Link>
                </Grid>
                <Grid item mt={2} sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  JACK 
                  <Link component={HistoryLink} to="/photos/jack">
                      <img src="/img/gallery-photos/jack/denmark-1-2023.jpg" alt="jack-denmark" />
                  </Link>
                </Grid>
                <Grid item mt={2} sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  JAMIE
                  <Link component={HistoryLink} to="/photos/jamie">
                      <img src="/img/jamie-alley-loop-2024-start.jpg" alt="jamie-ally-loop-2024-start" />
                  </Link>
                </Grid>
                <Grid item mt={2} sx={{ height: "40vh", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                  MEMORIES
                  <Link component={HistoryLink} to="/photos/memories">
                      <img src="/img/gallery-photos/33359-lyttle-dowdle.jpg" alt="lyttle-dowdle" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid> 
      </Box>
    </React.Fragment>
  );
};

export default Home;

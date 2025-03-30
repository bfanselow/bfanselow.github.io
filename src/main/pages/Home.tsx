import React from "react";
import MainAppBar from "../components/MainAppBar";
import MainToolbar from "../components/MainToolbar";
import { Box, Card, CardMedia, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <React.Fragment>
      <MainAppBar>
        <MainToolbar title="Welcome to my website - a small peak into my interests and adventures">
        </MainToolbar>
      </MainAppBar>
      <Box>
            <Card sx={{ height: "80vh" }}>
              <CardMedia
                    component="img"
                    image="img/cb_nordic.jpg"
              />
              <Box
                    sx={{
                        width: "45%",
                        position: "relative",
                        bottom: 350,
                        left: 100,
                        color: "black",
                    }}
              >
                <Typography variant="h5">
                The world is a huge place. How will you know where you fit in unless you explore beyond your comfort zone?
                </Typography>
                <Typography variant="h6">
                    ~ Ernest Shackleton
                </Typography>
              </Box> 
            </Card>
      </Box>
    </React.Fragment>
  );
};

export default Home;

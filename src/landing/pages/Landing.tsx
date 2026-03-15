import { Box, Card, CardMedia } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";

const REDIRECT = "http://134.209.175.8/";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    window.location.href = REDIRECT; // navigate the URL
  };

  return (
    <Paper square sx={{ backgroundColor: "#000", height: "100vh" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
          <Card square={true}>
                <CardMedia
                    component="img"
                    height="70%"
                    width="70%"
                    image="img/robert-frost.png"
                />
          </Card>
      </Box>
      <Button
             sx={{
              marginTop: 2,
              opacity: isVisible ? 1: 0,
              transition: "opacity 20s ease-in-out",
              }}
              onClick={handleClick} 
              variant="contained"
              size="medium"
          >
             Enter
      </Button>
    </Paper>
  );
};
export default Landing;
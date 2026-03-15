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
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box
          component="img"
          src="img/robert-frost.png"
          alt="Landing"
          sx={{
            width: "56%",
            maxWidth: 500,
            height: "auto",
            display: "block",
          }}
        />

        <Button
          sx={{
            mt: 3,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
          onClick={handleClick}
          variant="contained"
        >
          Enter
        </Button>
      </Box>
    </Paper>
  );

};
export default Landing;
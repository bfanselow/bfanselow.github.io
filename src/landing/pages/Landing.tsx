import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";

const REDIRECT = "http://134.209.175.8/";

const Landing = () => {

  // opacities start at 0
  const [showImage, setShowImage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // empty dep-array means run this effect only once, after the component mounts, setting opacity to 1
  useEffect(() => {
    setShowImage(true);
    setShowButton(true);
  }, []);

  // In the component's styling below we use: [transition: "opacity 10s ease-in-out"]
  // When opacity changes from 0 -> 1 the browser sees, "Oh, opacity changed, and there's a transition defined."
  // So it automatically animates the change over the specified time

  const handleClick = () => {
    window.location.href = REDIRECT; // redirect to this URL
  };

    return (
    <Paper
      square
      sx={{
        backgroundColor: "#000",
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {/* Image */}
        <Box
          component="img"
          src="img/robert-frost.png"
          alt="Landing"
          sx={{
            width: "75vw",
            maxWidth: 900,
            height: "auto",
            display: "block",
            opacity: showImage ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        />

        {/* Button */}
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            mt: 4,
            opacity: showButton ? 1 : 0,
            transition: "opacity 10s ease-in-out",
          }}
        >
          Enter
        </Button>
      </Box>
    </Paper>
  );

};
export default Landing;
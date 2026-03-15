import { Button, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const REDIRECT = "http://http://134.209.175.8/";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    window.location.href = REDIRECT;
  };

  return (
    <Paper square sx={{ backgroundColor: "#000", height: "100vh" }}>
      <AppBar color="transparent" position="relative" sx={{ minHeight: 120 }}>
        <Toolbar
            variant="dense"
            style={{
              marginTop: 2,
              opacity: isVisible ? 1: 0,
              transition: "opacity 20s ease-in-out",
              borderBottom: "2px solid",
              borderBottomColor: "#222" 
            }}
          >
          <Button
              sx={{ margin: 1 }}
              onClick={handleClick} 
              variant="contained"
              size="medium"
          >
             Enter
          </Button>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </Paper>
  );
};

export default LandingLayout;

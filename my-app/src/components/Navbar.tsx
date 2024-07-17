import React, { FC, useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from '@mui/material';
import styled from '@emotion/styled';


const pages = [
    { title: "Home", path: "/" },
    { title: "Endurance", path: "/endurance" },
    { title: "Software", path: "/software" },
    { title: "Photos", path: "/photos" },
  ];


const ActiveLink = styled(NavLink)({
    '&.active': {
        height: "40px",
        fontWeight: "fontWeightBold",
        textDecoration: "underline",
    }
});
  
const Layout: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event: any) => {
        console.log('opening' + event);
        console.log(event.currentTarget);
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        console.log('closing');
        setAnchorElNav(null);
    };

    
  return (
    <>
    <CssBaseline/>
    <AppBar position="static" sx={{ backgroundColor: "#333A3F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <div />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map(({title, path}) => (
                <MenuItem key={title}
                component={ActiveLink}
                to={path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({title, path}) => (
              <Button
              key={title}
              component={ActiveLink}
              to={path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
    <Outlet />
  </>);

}

export default Layout;

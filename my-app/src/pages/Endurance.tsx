import React, { FC, useState } from "react";

import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Drawer, styled, useTheme, Typography, Card, CardMedia } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BarChartIcon from '@mui/icons-material/BarChart';
import PhotoIcon from '@mui/icons-material/Photo';
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const PhotoDiv = styled('div')(({ theme }) => ({
    width: "90%",
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const drawerWidth = 190;

const Endurance: FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
                PaperProps={{
                  sx: {
                          backgroundColor: "#333A3F",
                  }
              }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Typography variant="h5" sx={{ color: "white" }} mx={2} my={2}>
            ENDURANCE
        </Typography>
        <List>
          {['Training-Log', 'Philosophies', 'Charts', 'Photos'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ color: "white" }}>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <BarChartIcon /> : <PhotoIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Card sx={{ position: "relative", width: "90vw", height: "90vh", top: "10px", left: "10px" }}>
            <Box>
                <CardMedia
                    sx={{ overflow: "hidden" }}
                    component="img"
                    image="/images/prefontaine.webp"
                />
            <Box
                sx={{
                    position: 'absolute',
                    top: "6px",
                    left: "6px",
                    color: 'white',
                    textShadow: '3px 3px 3px rgba(51, 51, 51, 0.90)',
                    padding: '13px',
                }}
            >
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
            </Box>
        </Box>
        </Card>
    </Box>
  );
}

export default Endurance;
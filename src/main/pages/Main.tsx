import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import QueryWrapper from "../../core/components/QueryWrapper";
import SettingsDrawer from "../../core/components/SettingsDrawer";
import { useSettings } from "../../core/contexts/SettingsProvider";
import MainDrawer from "../components/MainDrawer";

const MainLayout = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { collapsed, open, toggleDrawer } = useSettings();

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MainDrawer
        collapsed={collapsed}
        mobileOpen={open}
        onDrawerToggle={toggleDrawer}
        onSettingsToggle={handleSettingsToggle}
      />
      <SettingsDrawer
        onDrawerToggle={handleSettingsToggle}
        open={settingsOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, px: { xs: 3, sm: 6 } }}>
        <Toolbar />
        <QueryWrapper>
          <Outlet />
        </QueryWrapper>
      </Box>
    </Box>
  );
};

export default MainLayout;

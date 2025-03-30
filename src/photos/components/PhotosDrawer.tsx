import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DownhillSkiingIcon from "@material-ui/icons/DownhillSkiing";
import LandscapeIcon from "@material-ui/icons/Landscape";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import FamilyRestroomIcon from "@material-ui/icons/FamilyRestroom";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthProvider";
import Logo from "../../core/components/Logo";
import { drawerCollapsedWidth, drawerWidth } from "../../core/config/layout";
import { Divider } from "@material-ui/core";

type DrawerProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  onSettingsToggle: () => void;
};

export const menuItems = [
  {
    icon: HomeIcon,
    key: "main.drawer.menu.home",
    name: "Site Home",
    path: "/main",
  },
  {
    icon: CameraAltIcon,
    key: "photos.drawer.menu.home",
    name: "Photos",
    path: "/photos",
  },
  {
    icon: DirectionsRunIcon,
    key: "photos.drawer.menu.run",
    name: "Run",
    path: "/photos/run",
  },
  {
    icon: DirectionsBikeIcon,
    key: "photos.drawer.menu.bike",
    name: "Bike",
    path: "/photos/bike",
  },
  {
    icon: DownhillSkiingIcon,
    key: "photos.drawer.menu.ski",
    name: "Ski",
    path: "/photos/ski",
  },
  {
    icon: LandscapeIcon,
    key: "photos.drawer.menu.nature",
    name: "Nature",
    path: "/photos/nature",
  },
  {
    icon: PeopleIcon,
    key: "photos.drawer.menu.jack",
    name: "Jack",
    path: "/photos/jack",
  },
  {
    icon: PeopleIcon,
    key: "photos.drawer.menu.jamie",
    name: "Jamie",
    path: "/photos/jamie",
  },
  {
    icon: FamilyRestroomIcon,
    key: "photos.drawer.menu.memories",
    name: "Memories",
    path: "/photos/memories",
  },
];

const PhotosDrawer = ({
  collapsed,
  mobileOpen,
  onDrawerToggle,
  onSettingsToggle,
}: DrawerProps) => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();

  const width = collapsed ? drawerCollapsedWidth : drawerWidth;

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Logo sx={{ display: "flex", p: 1.5 }} />
      <List component="nav" sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <>
          <ListItem
            button
            component={NavLink}
            key={item.path}
            activeClassName="Mui-selected"
            end={true}
            to={`/${process.env.PUBLIC_URL}${item.path}`}
          >
            <ListItemAvatar>
              <Avatar sx={{ color: "inherit", bgcolor: "transparent" }}>
                <item.icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              //primary={t(item.key)} // for translation
              primary={item.name}
              sx={{
                display: collapsed ? "none" : "block",
              }}
            />
          </ListItem>
          {item.name === "Site Home" && (
            <>
                <Divider />
                <div style={{ height: 30 }}></div>
            </>
          )}
          </>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List component="nav" sx={{ p: 2 }}>
        <ListItem
          button
          component={NavLink}
          to={`/${process.env.PUBLIC_URL}/admin/profile`}
        >
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          {userInfo && (
            <ListItemText
              primary={`${userInfo.firstName} ${userInfo.lastName}`}
              sx={{
                display: collapsed ? "none" : "block",
              }}
            />
          )}
        </ListItem>
        <ListItem button onClick={onSettingsToggle}>
          <ListItemAvatar>
            <Avatar>
              <SettingsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t("admin.drawer.menu.settings")}
            sx={{
              display: collapsed ? "none" : "block",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      aria-label="Photos drawer"
      component="nav"
      sx={{
        width: { lg: width },
        flexShrink: { lg: 0 },
      }}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default PhotosDrawer;

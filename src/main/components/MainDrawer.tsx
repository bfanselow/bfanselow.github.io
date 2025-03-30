import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AdminPanelSettingsIcon from "@material-ui/icons/AdminPanelSettings";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CodeIcon from "@material-ui/icons/Code";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthProvider";
import Logo from "../../core/components/Logo";
import { drawerCollapsedWidth, drawerWidth } from "../../core/config/layout";

type DrawerProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  onSettingsToggle: () => void;
};

export const menuItems = [
  {
    icon: HomeIcon,
    name: "Home",
    key: "main.drawer.menu.home",
    path: "/main",
  },
  {
    icon: DirectionsRunIcon,
    name: "Endurance",
    key: "endurance.drawer.menu.home",
    path: "/endurance",
  },
  {
    icon: CameraAltIcon,
    name: "Photos",
    key: "photos.drawer.menu.home",
    path: "/photos",
  },
  {
    icon: FormatQuoteIcon,
    name: "Quotes",
    key: "quotes.drawer.menu.home",
    path: "/main/quotes",
  },
  {
    icon: CodeIcon, 
    name: "Software",
    key: "software.drawer.menu.home",
    path: "/software",
  },
  {
    icon: InfoIcon, 
    name: "About",
    key: "about.drawer.menu.home",
    path: "/about",
  },
  {
    icon: AdminPanelSettingsIcon, 
    name: "Admin",
    key: "admin.drawer.menu.home",
    path: "/admin",
  },
];

const MainDrawer = ({
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
              //primary={t(item.key)}
              primary={item.name}
              sx={{
                display: collapsed ? "none" : "block",
              }}
            />
          </ListItem>
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
      aria-label="Admin drawer"
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

export default MainDrawer;

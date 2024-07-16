import React, { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Launch as LaunchIcon } from "@mui/icons-material";
import { AppBar, Button, Menu, MenuItem, Theme, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import { HistoryLink } from "../utils/Links";

export const NavbarHeight = 6.5;

/** 
const useStyles = makeStyles((theme: Theme) => ({
    navbarHeight: {
        height: theme.spacing(NavbarHeight),
        minHeight: theme.spacing(NavbarHeight), // needed to overwrite minheight values set in the theme
    },
    link: {
        display: "flex",
        color: theme.palette.primary.contrastText,
    },
    logo: {
        paddingRight: theme.spacing(2),
        height: theme.spacing(NavbarHeight),
        width: theme.spacing(NavbarHeight),
        color: "white",
    },
    item: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
    },
    navbarItem: {
        color: theme.palette.text.primary,
        "&:hover": {
            textDecoration: "none",
        },
    },
    navbarButton: {
        whiteSpace: "nowrap",
        margin: "0 2px",
        color: "white",
    },
    navbarSelected: {
        height: theme.spacing(NavbarHeight),
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        borderBottom: `3px solid white`,
        borderTop: "3px solid transparent",
    },
}));
 */

interface NavbarItems {
    name: string;
    link: string;
    external?: boolean;
}

const LINKS: { [key: string]: NavbarItems[] } = {
    tools: [
        {
            name: "Contact List",
            link: "/contacts/list/",
        },
        {
            name: "FANS Browser",
            link: "/fans/",
        },
        {
            name: "Jira List",
            link: "/jira/list/",
        },
        {
            name: "Map Explorer",
            link: "/map/",
        },
        {
            name: "Mission Logs",
            link: "/logs/",
        },
        {
            name: "Orbit Decay",
            link: `/orbitdecay/`,
        },
        {
            name: "Payload Window List",
            link: "/payload-windows/list/",
        },
    ],
    resources: [
        {
            name: "Grafana",
            link: "https://grafana.cloud.spire.com/",
            external: true,
        },
        {
            name: "Kibana",
            link: "https://kibana.cloud.spire.com/",
            external: true,
        },
        {
            name: "SEA",
            link: "https://sea.spire.sh/",
            external: true,
        },
        {
            name: "SRP",
            link: "https://srp.spire.sh/",
            external: true,
        },
        {
            name: "The Knowledge",
            link: "https://theknowledge.cloud.spire.com/admin/",
            external: true,
        },
        {
            name: "Unified Alerting",
            link: "https://alert.cloud.spire.com/",
            external: true,
        },
        {
            name: "Zeppelin",
            link: "http://zeppelin01.cloud.spire.com/#/",
            external: true,
        },
    ],
};

const NavbarMenu: FC<{ title: string; items: NavbarItems[] }> = ({ title, items }) => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const { pathname } = useLocation();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <>
            <div>
                <Button onClick={handleClick}>
                    {title}
                </Button>
            </div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                variant="selectedMenu"
                style={{
                    maxHeight: "80vh",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                {items.map(({ name, link, external = false }) => {
                    const props = {
                        component: external ? "a" : HistoryLink,
                        ...(external ? { href: link, target: "_blank" } : {}),
                        ...(!external ? { to: link } : {}),
                    };

                    return (
                        <MenuItem
                            key={`${name}-menu-item`}
                            onClick={handleClose}
                            {...props}
                            selected={pathname === link}
                        >
                            {name}
                            {external && <LaunchIcon style={{ height: "0.7em" }} />}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

const Navbar: FC = () => {
    const theme = useTheme();
    const condensed = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <div>
                        <HistoryLink to="/">
                            <img src="logo.png" alt="logo"/>
                        </HistoryLink>
                        <NavbarMenu title={!condensed ? "Tools" : "T"} items={LINKS.tools} />
                        <NavbarMenu title={!condensed ? "Resources" : "R"} items={LINKS.resources} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;

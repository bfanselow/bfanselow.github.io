import React, { Fragment, useContext } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import { Link } from "@mui/material";

// Taken from https://material-ui.com/guides/composition/#link
// Connects our MaterialUI components with our react router history.
// Without this routing would not trigger properly and every page would just reload rather than be a SPA
const HistoryLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
    <RouterLink ref={ref} {...props} />
));
HistoryLink.displayName = "HistoryLink";
export { HistoryLink };

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from "react";

const ToolbarWidget = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        id="notifications-button"
        aria-controls="notifications-popover"
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        aria-label="show recent notifications"
        color="inherit"
        onClick={handleClick}
      >
          <NotificationsIcon />
      </IconButton>
      <Popover
        id="notifications-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ width: 360 }}>
           Some Toolbar Data
        </Box>
      </Popover>
    </Box>
  );
};

export default ToolbarWidget;

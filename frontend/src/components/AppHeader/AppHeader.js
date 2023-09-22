import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    const navigationUrl =
      type === "PROFILE"
        ? "/account/overview"
        : type === "SETTINGS"
        ? "/account/settings"
        : "/";
    navigate(navigationUrl, { replace: type === "LOGOUT" ? true : false });
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 270px)`,
        ml: "270px",
        boxShadow: "unset",
        backgroundColor: "#E8E8E8",
        color: "#071437",
      }}
    >
      <Toolbar>
        <Typography variant="h6">Hello Christ University!</Typography>
        <Box flexGrow={1} />
        <IconButton edge="end" color="inherit" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose("PROFILE")}>Profile</MenuItem>
          <MenuItem onClick={() => handleClose("SETTINGS")}>Settings</MenuItem>
          <MenuItem onClick={() => handleClose("LOGOUT")}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

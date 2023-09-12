import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AppHeader = () => {
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
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

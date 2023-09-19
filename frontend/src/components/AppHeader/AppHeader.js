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
        backgroundColor: "#fff",
        color: "#071437",
      }}
    >
      <Toolbar>
        <Typography variant="h6" ><span className="text fs-5 fw-medium" style={{color: '#545454'}}>Hello Christ University!</span></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

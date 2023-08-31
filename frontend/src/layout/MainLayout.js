import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import Sidebar from "../components/Sidebar/Sidebar";
import AppHeader from "../components/AppHeader";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader />
      <Box
        component="nav"
        sx={{
          width: "270px",
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 270px)`,
          minHeight: "100vh",
          backgroundColor: "#FDFAF5",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

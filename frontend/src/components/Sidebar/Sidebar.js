import { Drawer, List, Stack, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

import LogoImage from "../../images/login.jpg";

const Sidebar = () => {
  // navigation
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "270px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "270px",
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: "#fff",
          color: "#00B2FF",
        },
      }}
    >
      <List disablePadding>
        <Toolbar style={{ borderBottom: "thin solid #E8E8E8" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <span onClick={() => navigate("/dashboard", { replace: true })}>
              <img
                src={LogoImage}
                className="img-fluid"
                style={{
                  height: "45px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                alt="Logo"
              />
            </span>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;

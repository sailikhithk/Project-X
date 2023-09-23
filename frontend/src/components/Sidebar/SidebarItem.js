import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const { appState } = useSelector((state) => state.appState);

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        backgroundColor: appState === item.state ? "#F9F9F9" : "unset",
        paddingY: "12px",
      }}
    >
      <ListItemIcon
        sx={{
          color: "#5271FF",
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      <span className="text fw-medium" style={{color: '#5271FF'}}>{item.sidebarProps.displayText}</span>
    </ListItemButton>
  ) : null;
};

export default SidebarItem;

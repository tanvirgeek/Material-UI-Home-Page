import {
  Home,
  Mail,
  ModeNight,
  Notifications,
  Settings,
  Sunny,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={"a"}
            href="http://www.google.com"
            target="_blank"
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={"a"}
            href="http://www.google.com"
            target="_blank"
          >
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={"a"}
            href="http://www.google.com"
            target="_blank"
          >
            <ListItemIcon>
              <Sunny />
            </ListItemIcon>
            <ListItemText primary="Sun" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={"a"}
            href="http://www.google.com"
            target="_blank"
          >
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={"a"}
            href="http://www.google.com"
            target="_blank"
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch defaultChecked />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

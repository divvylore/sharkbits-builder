import React from "react";
import { useEditor } from "@craftjs/core";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDrawer } from "./DrawerContext";
import logo from "../../logo.svg";
const drawerWidth = 220;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerContent = ({ children }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const { open, handleToggleClick } = useDrawer();

  return (
    <Drawer
      enabled={enabled}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Grid container spacing={{ xs: 0, md: 0 }}>
        <Grid item xs={12}>
          <img src={logo} alt="Divvylore" width="195" />
        </Grid>
        <Grid item xs={12}>
        {children}
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default DrawerContent;

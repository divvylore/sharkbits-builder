import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { Topbar } from "./Topbar";
import cx from "classnames";
import { UndoOutlined, RedoOutlined } from "@material-ui/icons";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawer } from "../DrawerContext";
import EditorCommandBar from "../EditorCommandBar";

const defaultProps ={
  laptopMaxWidth: 1366,
  tabletMaxWidth: 1024,
  phoneMaxWidth: 320,
  drawerWidth : 220
}
const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: defaultProps.drawerWidth,
    width: `calc(100% - ${defaultProps.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Header = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const { open, handleToggleClick, deviceMaxWidth, handleDeviceMaxWidthChange } = useDrawer();
  const iconName = open ? "AddToShoppingList" : "AddIn";
  const handleChange = (event, maxWidth) => {
    handleDeviceMaxWidthChange(maxWidth);
  };
  return (
    <AppBarStyled position="fixed" open={open}>
      <EditorCommandBar
        disabled={!enabled}
        farItems={[
          {
            key: "toggleButton",
            onRender: () => (
              <ToggleButtonGroup exclusive aria-label="device" value={deviceMaxWidth} onChange={handleChange} >
                <ToggleButton aria-label="web" value={defaultProps.laptopMaxWidth}>
                  <ComputerIcon />
                </ToggleButton>
                <ToggleButton value={defaultProps.tabletMaxWidth} aria-label="tablet">
                  <TabletIcon />
                </ToggleButton>
                <ToggleButton value={defaultProps.phoneMaxWidth} aria-label="phone">
                  <PhoneIphoneIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            ),
          },
          {
            key: "redo",
            text: "Redo",
            iconProps: { iconName: "Redo" },
            disabled: !canRedo,
            onClick: () => actions.history.redo(),
          },
          {
            key: "undo",
            text: "Undo",
            iconProps: { iconName: "Undo" },
            disabled: !canUndo,
            onClick: () => actions.history.undo(),
          },
          {
            key: "preview",
            text: "Preview",
            iconProps: { iconName: "PreviewLink" },
            disabled: false,
            onClick: () => {
              actions.setOptions((options) => (options.enabled = !enabled))
            },
          },
          {
            key: "save",
            text: "Save",
            iconProps: { iconName: "Save" },
            disabled: false,
            onClick: () => console.log("Share"),
          },
        ]}
        items={[
          {
            key: "components",
            text: "Components",
            iconProps: { iconName: iconName },
            disabled: false,
            onClick: handleToggleClick,
          },
        ]}
      />
    </AppBarStyled>
  );
};

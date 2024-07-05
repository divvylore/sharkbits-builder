import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { GridColumnSettings } from "./GridColumnSettings.jsx";
import { Button } from '../Button';
import { Resizer } from "../Resizer.jsx";

const defaultProps = {
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["4", "0", "4", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  rcsXs: 3,
  rcsSm: 4,
  rcsMd: 6,
};
const theme = createTheme();
export const GridColumn = (props) => {
  const {
    connectors: { connect },
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    rcsXs, rcsSm, rcsMd,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    children,
    backgroundImage,
  } = props;

  return (
    <Grid ref={connect} item xs={rcsXs} sm={rcsSm} md={rcsMd}
        alignItems={alignItems}
        justifyContent={justifyContent}
        style={{
            background: `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`,
            color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
            margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
            boxShadow: shadow,
            borderRadius: radius,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "50px",
          }}>
        {children}
      </Grid>
  );
};

GridColumn.craft = {
  displayName: "GridColumn",
  props: defaultProps,
  related: {
    toolbar: GridColumnSettings,
  },
};

import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { GridRowSettings } from './GridRowSettings';

import { Resizer } from '../Resizer.jsx';

const defaultProps = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['4', '0', '4', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 255, g: 255, b: 255, a: 1 },
  shadow: 0,
  radius: 0,
  rsXs: 1,
  rsSm: 1,
  rsMd: 1,
};
const theme = createTheme();
export const GridRow = (props) => {
  const {
    connectors: { connect }
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    rsXs,
    rsSm,
    rsMd,
    flexDirection,
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
    backgroundImage
  } = props;
  
  return (
    <Grid
      ref={connect}
      container
      direction={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      rowSpacing={1}
      columnSpacing={{ xs: rsXs, sm: rsSm, md: rsMd }}
      style={{
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow: shadow,
        borderRadius: radius,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '50px'
      }}
    >
       {children}
    </Grid>
  );
};

GridRow.craft = {
  displayName: 'GridRow',
  props: defaultProps,
  related: {
    toolbar: GridRowSettings,
  },
};

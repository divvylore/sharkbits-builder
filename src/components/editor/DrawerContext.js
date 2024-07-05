import React, { createContext, useContext, useState } from 'react';
import { useEditor } from '@craftjs/core';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [deviceMaxWidth, setDeviceMaxWidth] = useState(1600);

  const handleDeviceMaxWidthChange = (newMaxWidth) => {
    setDeviceMaxWidth(newMaxWidth);
  };


  const handleToggleClick = () => {
    setOpen(!open);
  };

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <DrawerContext.Provider enabled={enabled} value={{ open, handleToggleClick, deviceMaxWidth, handleDeviceMaxWidthChange }}>
      {children}
    </DrawerContext.Provider>
  );
};

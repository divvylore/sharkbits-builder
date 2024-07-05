import React, { useState, useEffect } from 'react';
import { ContainerResizerSettings } from './ContainerResizerSettings';
import { Resizer } from '../Resizer.jsx';
import { useDrawer } from "../../editor/DrawerContext";

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['4', '0', '4', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
  laptopMaxWidth: 1600,
  tabletMaxWidth: 1024,
  phoneMaxWidth: 800
};

export const ContainerResizer = (props) => {
  const { deviceMaxWidth, handleDeviceMaxWidthChange } = useDrawer();
  props = {
    ...defaultProps,
    ...props,
  };

  const {
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

  const handleResize = () => {
    const windowWidth = window.innerWidth;
  
    if (windowWidth <= defaultProps.phoneMaxWidth) {
      handleDeviceMaxWidthChange(defaultProps.phoneMaxWidth);
    } else if (windowWidth <= defaultProps.phoneMaxWidth) {
      handleDeviceMaxWidthChange(defaultProps.phoneMaxWidth);
    } else {
      handleDeviceMaxWidthChange(defaultProps.laptopMaxWidth);
    }
  };
  

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);  

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Resizer
        propKey={{ width: 'width', height: 'height'}}
        style={{
          justifyContent,
          flexDirection,
          alignItems,
          backgroundImage: `url(${backgroundImage})`,
          background: `rgba(${Object.values(background)})`,
          color: `rgba(${Object.values(color)})`,
          padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
          boxShadow:
            shadow === 0
              ? 'none'
              : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
          borderRadius: `${radius}px`,
          flex: fillSpace === 'yes' ? 1 : 'unset',
          maxWidth: deviceMaxWidth
        }}
      >
        {children}
      </Resizer>
    </>
  );
};

Container.craft = {
  displayName: 'Resizer',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};

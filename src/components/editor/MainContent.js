import React from 'react';
import { useEditor } from '@craftjs/core';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useDrawer } from './DrawerContext';
import { DrawerHeader } from './DrawerContent';

const drawerWidth = 220;

const MainContentWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  })
);

const MainContent = ({children}) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const { open } = useDrawer();
  return (
    <MainContentWrapper open={open} enabled={enabled}>
        <DrawerHeader/>
        {children}
    </MainContentWrapper>
  );
};

export default MainContent;

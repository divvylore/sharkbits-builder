import { useEditor } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import React, { useState } from 'react';
import styled from 'styled-components';

import { SidebarItem } from './SidebarItem';
import Icon from '@ant-design/icons';
import {AutoAwesomeMotionOutlined , BorderColorOutlined } from "@material-ui/icons";
import { Toolbar } from '../../Toolbar';
const CustomizeIconComponent = (props) => {
  return <BorderColorOutlined style={{ marginRight: '8px' }}/>
};

const BlockOutlinedIconComponent = (props) => {
  return <AutoAwesomeMotionOutlined style={{ marginRight: '8px' }}/>
};
export const SidebarDiv = styled.div`
  width: 280px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
  margin-left: ${(props) => (props.enabled ? 5 : -280)}px;
  margin-right: ${(props) => (props.enabled ? 5 : -280)}px;
`;

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-white w-2">
      <div className="flex flex-col h-full">
        <SidebarItem
          icon={CustomizeIconComponent}
          title="Customize"
          height={!layersVisible ? 'full' : '55%'}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
        >
          <Toolbar />
        </SidebarItem>
        <SidebarItem
          icon={BlockOutlinedIconComponent}
          title="Layers"
          height={!toolbarVisible ? 'full' : '45%'}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};

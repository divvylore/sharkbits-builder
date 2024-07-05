import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import { Fade, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ListItemControl = (props) => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <Tooltip
      enabled={enabled}
      title={props.tooltipText}
      placement="top"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <StyledListItem
        className="cursor-pointer block"
        move
        key={props.key ?? props.text}
        ref={(ref) =>
          create(
            ref,
            <Element
              canvas
              is={props.control}
            ></Element>
          )
        }
      >
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </StyledListItem>
    </Tooltip>
  );
};

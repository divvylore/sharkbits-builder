import { Element, useEditor } from "@craftjs/core";
import React from "react";
import styled from "styled-components";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListItemControl } from "./ListItemControl";
import { Button } from "../../selectors/Button";
import { Container } from "../../selectors/Container";
import { GridRow } from "../../selectors/GridRow";
import { GridColumn } from "../../selectors/GridColumn";
import { Text } from "../../selectors/Text";
import { Custom1 } from "../../selectors/Custom1";
import { Image } from "../../selectors/Image";
import { Custom3 } from "../../selectors/Custom3";
import { Custom4 } from "../../selectors/Custom4";
import { TextComponent } from "../../selectors/TextComponent";

const ToolboxDiv = styled.div`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv enabled={enabled} className="toolbox transition">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Header
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemControl
              key="Container"
              text="Container"
              icon={<InboxIcon />}
              control={Container}
              tooltipText="This container holds your UI elements. Drag and drop to customize"
            />
            <ListItemControl
              key="GridRow"
              text="Row"
              icon={<InboxIcon />}
              control={GridRow}
              tooltipText="Grid row for responsive page."
            />
            <ListItemControl
              key="GridColumn"
              text="Column"
              icon={<InboxIcon />}
              control={GridColumn}
              tooltipText="Grid row for responsive page."
            />
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Body
        </AccordionSummary>
        <AccordionDetails>
          body controls
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Footer
        </AccordionSummary>
        <AccordionDetails>
          footer control
        </AccordionDetails>
      </Accordion>
    </ToolboxDiv>
  );
};

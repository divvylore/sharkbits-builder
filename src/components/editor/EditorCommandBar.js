import React from "react";
import { CommandBar, initializeIcons } from "@fluentui/react/lib";

initializeIcons();

const EditorCommandBar = (props) => (
  <CommandBar
    items={props.items}
    farItems={props.farItems}
    overflowButtonProps={props.overflowButtonProps}
    ariaLabel={props.ariaLabel}
  />
);

export default EditorCommandBar;

import { Editor, Frame } from "@craftjs/core";
import React, { useState, useEffect } from "react";

import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { GridRow } from '../components/selectors/GridRow'
import { GridColumn } from '../components/selectors/GridColumn'
import { Button } from "../components/selectors/Button";
import { Image } from "../components/selectors/Image";
import { Custom1, OnlyButtons } from "../components/selectors/Custom1";
import { Custom3, Custom3BtnDrop } from "../components/selectors/Custom3";
import { Custom4 } from "../components/selectors/Custom4";
import { TextComponent } from '../components/selectors/TextComponent'
import mockData from '../utils/data1.json';

function App() {

  const [json, setJson] = useState(null);
  useEffect(() => {
    console.log(mockData)
    // const json = lz.decompress(lz.decodeBase64(stateToLoad));
    setJson(mockData);
  }, []);
  if (!json) return false;
  return (
    <div className="h-full h-screen">
      <Editor
        resolver={{
          Container,
          GridRow,
          GridColumn,
          Text,
          Custom1,
          Custom3,
          Custom3BtnDrop,
          Custom4,
          OnlyButtons,
          Button,
          TextComponent,
          Image
        }}
        enabled={true}
        onRender={RenderNode}
      >
        <Viewport>
          <Frame data={JSON.stringify(json)} />
        </Viewport>
      </Editor>
    </div>
  );
}

export default App;

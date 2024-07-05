import { Editor, Frame } from "@craftjs/core";
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ViewOnly} from "../components/editor/Viewport/ViewOnly";
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

const theme = createTheme();

function ViewerApp() {

  const [json, setJson] = useState(null);
  useEffect(() => {
    console.log(mockData)
    // const json = lz.decompress(lz.decodeBase64(stateToLoad));
    setJson(mockData);
  }, []);
  if (!json) return false;
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
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
                  enabled={false}
                  onRender={RenderNode}
                >
                  <ViewOnly>
                    <Frame data={JSON.stringify(json)} />
                  </ViewOnly>
                </Editor>
              </div>
    </ThemeProvider>
  );
}

export default ViewerApp;

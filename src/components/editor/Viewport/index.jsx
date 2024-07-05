import { useEditor } from "@craftjs/core";
import cx from "classnames";
import React, { useRef } from "react";
import { useTheme  } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerProvider } from "../DrawerContext";
import DrawerContent from "../DrawerContent";
import MainContent from "../MainContent";
import EditorCommandBar from "../EditorCommandBar";
//import Header from '../../layout/Header';

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Toolbox } from "./Toolbox";
export const Viewport = ({ children }) => {
  const theme = useTheme();
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const ref = useRef(null);
  return (
    <Box sx={{ display: "flex" }} ref={ref} className="viewport">
      <DrawerProvider>
        <Header />
        <DrawerContent>
          <Toolbox />
        </DrawerContent>
        <MainContent>
          <Grid container spacing={{ xs: 0, md: 0 }}>
            <Grid item xs={enabled ? 9 : 12}>
              <div className="page-container flex flex-1 h-full flex-col">
                <div
                  className={cx([
                    "craftjs-renderer flex-1 h-full w-full transition pb-8",
                    {
                      "bg-renderer-gray": enabled,
                    },
                  ])}
                  ref={(ref) =>
                    connectors.select(connectors.hover(ref, null), null)
                  }
                >
                  <div className="relative flex-col flex items-center pt-8">
                    {children}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={2} >
              <Sidebar />
            </Grid>
          </Grid>
        </MainContent>
      </DrawerProvider>
    </Box>
  );
};

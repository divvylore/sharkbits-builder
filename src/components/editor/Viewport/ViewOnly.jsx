import { useEditor } from "@craftjs/core";
import cx from "classnames";
import React, { useRef, useEffect } from "react";
import { useTheme  } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

export const ViewOnly = ({ children }) => {
  const theme = useTheme();
  const { enabled, connectors, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const ref = useRef(null);

  useEffect(() => {
    actions.setOptions((options) => (options.enabled = false))
  }, [enabled]);
  
  return (
    <Box sx={{ display: "flex" }} ref={ref} className="viewport">
      <Grid container spacing={{ xs: 0, md: 0 }}>
            <Grid item>
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
          </Grid>
    </Box>
  );
};

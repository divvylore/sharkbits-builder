import React from 'react';
import {AutofpsSelectOutlined} from "@material-ui/icons";
import { ToolbarSection, ToolbarItem } from '../../editor';

export const ImageSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Colors"
        props={['background']}
        summary={({ background }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                 <AutofpsSelectOutlined/>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
      </ToolbarSection>
      <ToolbarSection
        title="src"
        props={['src']}
        summary={({ src }) => {
          return src;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="src"
          type="input"
          label="src"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};

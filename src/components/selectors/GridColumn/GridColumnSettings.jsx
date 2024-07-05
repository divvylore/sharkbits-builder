import React from 'react';
import {AutofpsSelectOutlined} from "@material-ui/icons";
import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const GridColumnSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Column Size"
        props={['rcsXs', 'rcsSm', 'rcsMd']}
        summary={({ rcsXs, rcsSm, rcsMd }) => {
          return `xs: ${rcsXs || 0}, sm: ${rcsSm || 0}, md:  ${rcsMd || 0}`;
        }}
      >
        <ToolbarItem full={true} propKey="rcsXs" type="slider" min={1} max={12} label="Extra Small Device" />
        <ToolbarItem full={true} propKey="rcsSm" type="slider" min={1} max={12} label="Small Device" />
        <ToolbarItem full={true} propKey="rcsMd" type="slider" min={1} max={12} label="Desktop" />
      </ToolbarSection>
      <ToolbarSection
        title="Colors"
        props={['background', 'color']}
        summary={({ background, color }) => {
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
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection
        title="Padding"
        props={['padding']}
        summary={({ padding }) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={['radius', 'shadow']}>
        <ToolbarItem
          full={true}
          propKey="radius"
          type="slider"
          label="Radius"
        />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow"
        />
      </ToolbarSection>
      <ToolbarSection
        title="backgroundImage"
        props={['backgroundImage']}
        summary={({ backgroundImage }) => {
          return backgroundImage;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="backgroundImage"
          type="input"
          label="backgroundImage"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};

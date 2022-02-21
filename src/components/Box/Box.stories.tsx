import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, IBoxProps } from "./index";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args: IBoxProps) => (
  <Box {...args} />
);

export const SmallBox = Template.bind({});
SmallBox.args = {
  size: 100,
  color: "red",
};

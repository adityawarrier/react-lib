import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Circle, ICircleProps } from "./index";

export default {
  title: "Circle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args: ICircleProps) => (
  <Circle {...args} />
);

export const SmallCircle = Template.bind({});
SmallCircle.args = {
  color: 'red',
  size: 200,
};

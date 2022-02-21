import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  title: "Primary",
};

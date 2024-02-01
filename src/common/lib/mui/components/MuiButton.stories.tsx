import type { Meta, StoryObj } from "@storybook/react";

import Button from "@mui/material/Button";

const meta = {
  title: "Mui Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantText: Story = {
  args: {
    variant: "text",
  },
  render: (props) => <Button {...props}>Button Text</Button>,
};

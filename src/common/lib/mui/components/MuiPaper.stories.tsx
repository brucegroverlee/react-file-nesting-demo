import type { Meta, StoryObj } from "@storybook/react";

import Paper from "@mui/material/Paper";

const meta = {
  title: "MuiComponents/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sx: {
      p: 3,
    },
  },
  render: (props) => <Paper {...props}>This is a Paper</Paper>,
};

import type { Meta, StoryObj } from "@storybook/react";
import Paper from "@mui/material/Paper";

import { Header } from "./Header";

const meta = {
  title: "UI Kit/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Paper sx={{ width: "100%", height: "50vh" }}>
        <Story />
      </Paper>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profilePicture:
      "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/373489334_6482461255206119_7244215711268417862_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=xMoFfNcqldYAX9PDiXA&_nc_ht=scontent-iad3-2.xx&edm=AP4hL3IEAAAA&oh=00_AfDIdxQydOb2reuFOKGzzJlegflqHIp1bpxEUhmXrQ8CrQ&oe=65BB2EAC",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { YourLibrary } from "./YourLibrary";
import { processedLibraryList } from "./model/__mocks__/data";

const meta = {
  title: "Widgets/DesktopSidebar/YourLibrary",
  component: YourLibrary,
  parameters: {
    layout: "left",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "flex", width: 420, height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof YourLibrary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    loading: true,
    libraryList: [],
  },
};

export const Loaded: Story = {
  args: {
    loading: false,
    libraryList: processedLibraryList,
  },
};

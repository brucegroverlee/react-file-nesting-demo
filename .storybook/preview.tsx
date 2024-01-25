import React from "react";
import type { Preview } from "@storybook/react";

import { ThemeProvider } from "../src/common/lib/mui";

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withThemeProvider],
};

export default preview;

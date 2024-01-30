import { RouterProvider } from "react-router-dom";

import "./App.css";
import { AppRouter } from "./AppRouter";
import { ThemeProvider } from "src/common/lib/mui";
import { QueryClientProvider } from "src/common/lib/react-query";

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

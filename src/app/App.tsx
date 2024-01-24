import { RouterProvider } from "react-router-dom";

import "./App.css";
import { AppRouter } from "./AppRouter";
import { ThemeProvider } from "src/common/lib/mui";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}

export default App;

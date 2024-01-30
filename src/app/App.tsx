import { RouterProvider } from "react-router-dom";

import "./App.css";
import { AppRouter } from "./AppRouter";
import { ThemeProvider } from "src/common/lib/mui";
import { PlayerBarProvider } from "src/widgets/player-bar/model/PlayerBarProvider";
import { QueryClientProvider } from "src/common/lib/react-query";

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <PlayerBarProvider>
          <RouterProvider router={AppRouter} />
        </PlayerBarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

import { Home } from "./pages/home";
import { ThemeProvider } from "./context/ThemeProvider";

export function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

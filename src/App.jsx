import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<CaseStudy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

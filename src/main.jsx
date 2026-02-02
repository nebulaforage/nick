import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "lenis";
import "./index.css";

const lenis = new Lenis({
  duration: 1.25,
  smooth: true,
  easing: (t) => 1 - Math.pow(1 - t, 3),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


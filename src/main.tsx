import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";

createRoot(document.getElementById("root")!).render(<App />);

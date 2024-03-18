import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root.js"

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Root/>
  </BrowserRouter>
);
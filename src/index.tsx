import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomepageOrderSync } from "./screens/HomepageOrderSync";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomepageOrderSync />);

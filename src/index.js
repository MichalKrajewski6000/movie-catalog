require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
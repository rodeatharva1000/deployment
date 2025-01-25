import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Component1 from "./components/component1.jsx"
import Component2 from "./components/component2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Component1 />
    <Component2 />
  </StrictMode>
);

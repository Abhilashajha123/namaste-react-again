import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object => HTMLElement(render )

const heading = React.createElement("h1", { id: "heading" }, "Namastr react");

// JSX = HTML like and XML like syntax
// JSX= React.createElement => ReactElement-JS Object => HTMLElement(render )
// Babel transpile JSX code into React.createElement

const jsxHeading = <h1>React element by jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

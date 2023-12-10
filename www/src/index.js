import React from "react"
import * as ReactDOMClient from 'react-dom/client';

const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");

const elements = <input placeholder = "Help text" onClick={inputClick} onMouseEnter={mouseOver} />
const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(elements)



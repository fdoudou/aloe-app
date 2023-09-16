import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./aloe/App";


export default function AloehApp() {
    return (
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AloehApp></AloehApp>
    
  </>
);

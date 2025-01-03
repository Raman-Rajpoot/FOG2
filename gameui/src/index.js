import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Battlefields from "./components/Battlefields.js";
import AppComponent from "./components/AppComponent.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppComponent />}>
      <Route index element={<div><Battlefields /></div>} />
      <Route path="battlefield" element={<Battlefields />} />
    
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    
    <RouterProvider router={router} />
  
);

import React from "react";

import './styles/styles.css'

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home'
import About from "./About";
import Prices from "./Prices";
import Buy from "./Buy";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/prices",
    element: <Prices />
  },
  {
    path: "/buy",
    element: <Buy />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

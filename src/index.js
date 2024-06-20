import React from "react";

import './styles/styles.css'

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import About from "./pages/About";
import Prices from "./pages/Prices";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";

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

import React from "react";

import './styles/styles.css'

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CartProvider } from "react-use-cart";

import Home from './Home'
import About from "./About";
import Prices from "./Prices";
import Buy from "./Buy";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/prices",
    element: <Prices />,
  },
  {
    path: "/buy",
    element:   <CartProvider>
      <Buy />
      </CartProvider>,
  },
  {
    path: "/cart",
    element: <CartProvider>
      <Cart />
      </CartProvider>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

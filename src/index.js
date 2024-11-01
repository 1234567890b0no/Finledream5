import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App"
import Allourshop from "./Ourshop/Allourshop";
import AllDetailes from "./Detailes/AllDetailes";
import Allcontact from "./Contact/Allcontact";
import Allproduct from "./Product/Allproduct";
import ScrollToTop from "react-scroll-to-top";
import Allshop from "./Shop/Allshop";
import Allcart from "./Cart/Allcart";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Ourshop",
    element: <Allourshop/>,
  },
 
  {
    path: "detailes",
    element: <AllDetailes/>,
  },
  {
    path: "Contact",
    element: <Allcontact/>,
  },

  {
    path: "Product",
    element: <Allproduct/>,
  },
  {
    path: "Shop",
    element: <Allshop/>,
  },
  {
    path: "Cart",
    element: <Allcart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <div>
  <RouterProvider router={router} />

  <ScrollToTop smooth />
  
  </div>

);




//  import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
// import App from './App';
// import Allourshop from "./Ourshop/Allourshop";
// import AllDetailes from "./Detailes/AllDetailes";
// import Allcontact from './Contact/Allcontact';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
   
//   },
//   {
//     path: "Ourshop",
//     element: <Allourshop/>
//   },
//   {
//     path: "detailes",
//     element: <AllDetailes/>
//   },
//   {
//     path: "Contact",
//     element: <Allcontact/>
//   },
  
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <RouterProvider router={router} />
// );
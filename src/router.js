import React from "react";
import "./styles.css";
import Navbar from "./Navbar/navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements
} from "react-router-dom";
import App from "./App";
import Aboutus from "./cardpage/aboutus";
import Feature from "./features/features";

export default function Routes() {
  const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/Feature" element={<Feature />} />
      </Route>
    )
  );
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

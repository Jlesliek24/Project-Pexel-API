import React from "react";
import { FaBeer } from "react-icons/fa";

export const navbardata = [
  {
    title: "Home",
    path: "/",
    icon: <FaBeer.FaHome />,
    class: "navtext"
  },
  {
    title: "About",
    path: "/About",
    icon: <FaBeer.FaIdCard />,
    class: "navtext"
  },
  {
    title: "Feature",
    path: "/Feature",
    icon: <FaBeer.FaHeadset />,
    class: "navtext"
  },
  {
    title: "Moew",
    path: "/More",
    icon: <FaBeer.FaHandHoldingMedical />,
    class: "navtext"
  }
];

import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/Home";
import Error from "../pages/commonPages/Error";
import DashboardLayOut from "../layOut/DashboardLayOut";
import Room_management from "../pages/dashboard/Room_management";
import Room from "../pages/meeting_rooms/Room";
import AboutUs from "../pages/about/AboutUs";
import Login from "../pages/authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meeting_room",
        element: <Room />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/contact_us",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayOut />,
    children: [
      {
        path: "dashboard",
        element: <Room_management />,
      },
      {
        path: "room_management",
        element: <Room_management />,
      },
    ],
  },
]);

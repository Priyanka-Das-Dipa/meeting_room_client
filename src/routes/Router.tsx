import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/Home";
import Error from "../pages/commonPages/Error";
import DashboardLayOut from "../layOut/DashboardLayOut";
import Room_management from "../pages/dashboard/Room_management";

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

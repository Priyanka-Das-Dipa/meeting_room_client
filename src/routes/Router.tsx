import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/Home";
import Error from "../pages/commonPages/Error";
import DashboardLayOut from "../layOut/DashboardLayOut";
import Room_management from "../pages/dashboard/Room_management";
import Room from "../pages/meeting_rooms/Room";
import AboutUs from "../pages/about/AboutUs";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Contact from "../pages/contact/Contact";
import DashBoardMainPage from "../pages/dashboard/DashBoardMainPage";
import AllUsers from "../pages/dashboard/user_management/AllUsers";
import AllRooms from "../pages/dashboard/room_management/AllRooms";
import UserProfile from "../pages/dashboard/user_profile/UserProfile";
import AllSlots from "../pages/dashboard/slots_management/AllSlots";

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
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayOut />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardMainPage />,
      },
      {
        path: "room_management",
        element: <Room_management />,
      },
      {
        path: "all_users",
        element: <AllUsers />,
      },
      {
        path: "my_profile",
        element: <UserProfile/>,
      },
      {
        path: "all_rooms",
        element: <AllRooms />,
      },
      {
        path: "slot_management",
        element: <AllSlots />,
      },
    ],
  },
]);

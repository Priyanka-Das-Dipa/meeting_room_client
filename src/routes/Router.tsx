import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/Home";
import Error from "../pages/commonPages/Error";
import DashboardLayOut from "../layOut/DashboardLayOut";
import Room from "../pages/meeting_rooms/Room";
import AboutUs from "../pages/about/AboutUs";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Contact from "../pages/contact/Contact";
import DashBoardMainPage from "../pages/dashboard/DashBoardMainPage";
import AllUsers from "../pages/dashboard/user_management/AllUsers";
import UserProfile from "../pages/dashboard/user_profile/UserProfile";
import RoomManagement from "../pages/dashboard/room_management/RoomManagement";
import SlotManagement from "../pages/dashboard/slots_management/SlotManagement";
import BookingManagement from "../pages/dashboard/booking_management/BookingManagement";

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
        path: "booking-management",
        element: <BookingManagement />,
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
        element: <RoomManagement />,
      },
      {
        path: "slot_management",
        element: <SlotManagement />,
      },
    ],
  },
]);

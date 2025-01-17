import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import DashBoardMainPage from "../pages/dashboard/DashBoardMainPage";
import UserProfile from "../pages/dashboard/user_profile/UserProfile";
import AllUsers from "../pages/dashboard/user_management/AllUsers";
import AllRooms from "../pages/dashboard/room_management/AllRooms";
import BookingManagement from "../pages/dashboard/booking_management/BookingManagement";
import SlotManagement from "../pages/dashboard/slots_management/SlotManagement";

const { Header, Sider, Content } = Layout;

const routes = [
  {
    name: "Dashboard",
    index: true,
    icon: <UserOutlined />,
    element: <DashBoardMainPage />,
  },
  {
    name: "My Profile",
    path: "my_profile",
    icon: <UserOutlined />,
    element: <UserProfile />,
  },
  {
    name: "User Management",
    path: "all_users",
    icon: <UserOutlined />,
    element: <AllUsers />,
  },
  {
    name: "Room Management",
    path: "all_rooms",
    icon: <VideoCameraOutlined />,
    element: <AllRooms />,
  },
  {
    name: "Slot Management",
    path: "slot_management",
    icon: <UploadOutlined />,
    element: <SlotManagement />,
  },
  {
    name: "Booking Management",
    path: "booking-management",
    icon: <UploadOutlined />,
    element: <BookingManagement />,
  },
];

const DashboardLayOut: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const menuItems = routes.map((route, index) => ({
    key: route.path || index, // Use path or fallback to index
    icon: route.icon,
    label: route.name,
    onClick: () => route.path && navigate(route.path),
  }));

  return (
    <Layout className="h-screen">
      <Sider
        width={300}
        collapsedWidth={100}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical py-6" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="min-h-screen overflow-y-scroll">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayOut;

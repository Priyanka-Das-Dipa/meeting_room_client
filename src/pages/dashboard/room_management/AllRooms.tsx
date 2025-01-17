import { Button, Space, Table, TableProps } from "antd";
import React from "react";

interface DataType {
  key: string;
  name: string;
  email: string;
  address: string;
  phone: number;
  role: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",

    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },

  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button className="text-blue-500">Role</Button>
        <Button className="text-red-500 hover:border-red-500">Delete</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    email: "dipa@gmail.com",
    phone: 7891234532,
    address: "New York No. 1 Lake Park",
    role: "user",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "dipa@gmail.com",
    phone: 7891234532,
    address: "London No. 1 Lake Park",
    role: "admin",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "dipa@gmail.com",
    phone: 7891234532,
    address: "Sydney No. 1 Lake Park",
    role: "user",
  },
];

const AllRooms = () => {
  return (
    <div>
      <Table<DataType> columns={columns} dataSource={data} />
    </div>
  );
};

export default AllRooms;

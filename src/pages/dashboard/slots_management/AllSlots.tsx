import { Button, Space, Table, TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  room: string;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Room No",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Start Time",
    dataIndex: "start_time",
    key: "start_time",
  },
  {
    title: "End Time",
    dataIndex: "end_time",
    key: "end_time",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
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
    name: "Alice Johnson",
    room: "101",
    date: "2025-01-15",
    start_time: "10:00 AM",
    end_time: "11:00 AM",
    status: "Scheduled",
  },
  {
    key: "2",
    name: "Bob Smith",
    room: "202",
    date: "2025-01-15",
    start_time: "11:30 AM",
    end_time: "12:30 PM",
    status: "Completed",
  },
  {
    key: "3",
    name: "Charlie Davis",
    room: "303",
    date: "2025-01-16",
    start_time: "01:00 PM",
    end_time: "02:00 PM",
    status: "Cancelled",
  },
  {
    key: "4",
    name: "Diana Miller",
    room: "404",
    date: "2025-01-16",
    start_time: "02:30 PM",
    end_time: "03:30 PM",
    status: "Scheduled",
  },
  {
    key: "5",
    name: "Ethan Wright",
    room: "505",
    date: "2025-01-17",
    start_time: "09:00 AM",
    end_time: "10:00 AM",
    status: "Scheduled",
  },
];

const AllSlots = () => {
  return (
    <div>
      <Table<DataType> columns={columns} dataSource={data} />
    </div>
  );
};

export default AllSlots;

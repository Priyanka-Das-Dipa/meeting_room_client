/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table, TableColumnsType, Tag } from "antd";
import NoDataFound from "../../commonPages/NoDataFound";
import {
  useDeleteSlotMutation,
  useGetAllSlotsQuery,
} from "../../../redux/api/room_management/slot.api";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { DataType } from "../room_management/AllRooms";
import moment from "moment";
import Loading from "../../commonPages/Loading";

const BookedSlots = () => {
  const { data, isLoading, isFetching } = useGetAllSlotsQuery({
    isBooked: true,
  });
  const [deleteSlot] = useDeleteSlotMutation();

  const transformSlot = data?.data?.map((slot: any, index: number) => {
    return {
      ...slot,
      key: slot._id, // Assuming 'id' is the unique identifier
      no: index + 1,
    };
  });
  // handle Delete slot
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteSlot(id);
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    });
  };
  const columns: TableColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      render: (text: string) => (
        <a
          className="md:font-semibold text-xs sm:text-base"
          style={{ lineHeight: "1" }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Room Name",
      dataIndex: ["room", "name"],
      render: (text: string) => (
        <a
          className="md:font-semibold text-xs sm:text-base"
          style={{ lineHeight: "1" }}
        >
          {text}
        </a>
      ),
      // filters: filterableData,
      // onFilter: (value, record) => record.address.indexOf(value as string) === 0,
    },
    {
      title: "Room No",
      dataIndex: ["room", "roomNo"],
      // render: (text: string) => <a className='md:font-bold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => <p>{moment(date).format("MMM Do YY")}</p>,
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Status",
      dataIndex: "isBooked",
      render: (isBooked: boolean) => {
        return (
          <Tag color={`${isBooked ? "yellow" : "blue"}`}>
            {!isBooked ? "Available" : "Booked"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      render: (transformSlot) => {
        // console.log(transformSlot?.isBooked)
        return (
          <div className="flex gap-3">
            <Button
              onClick={() => handleDelete(transformSlot._id)}
              className="w-fit p-1 h-auto border-0 text-red-600"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {transformSlot?.length ? (
        <div>
          <Table
            scroll={{ x: 800 }}
            sticky={true}
            loading={isFetching}
            columns={columns}
            dataSource={transformSlot}
          />
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default BookedSlots;

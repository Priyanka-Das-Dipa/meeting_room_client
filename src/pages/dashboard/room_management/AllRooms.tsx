/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table, TableColumnsType, TableProps } from "antd";
import {
  useDeleteRoomMutation,
  useGetAllRoomsQuery,
} from "../../../redux/api/room_management/room.api";
import { useState } from "react";
import { toast } from "sonner";

interface DataType {
  key: string;
  name: string;
  email: string;
  address: string;
  phone: number;
  role: string;
}

const AllRooms: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = useGetAllRoomsQuery({
    search,
    limit: 10,
  });
  console.log(isLoading, isFetching);
  console.log(data);

  const rooms = data?.data?.result;
  const filterableData: { text: string; value: string }[] = [];
  const transformedProducts = rooms?.map((product: any, index: number) => {
    filterableData.push({ text: product?.name, value: product.name });
    return {
      ...product,
      key: product._id,
      no: index + 1,
    };
  });
  // handle delete product
  const [deleteProduct] = useDeleteRoomMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteProduct(id);
      if (res.data.success) {
        toast.success(res.data.message || "Product deleted successfully!");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete the product");
    }
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
      title: "Name",
      dataIndex: "name",
      render: (text: string) => (
        <a
          className="md:font-semibold text-xs sm:text-base"
          style={{ lineHeight: "1" }}
        >
          {text}
        </a>
      ),
      filters: filterableData,
      // onFilter: (value, record) => record.address.indexOf(value as string) === 0,
    },
    {
      title: "Room No",
      dataIndex: "roomNo",
      // render: (text: string) => <a className='md:font-bold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
    },
    {
      title: "Amenities",
      dataIndex: "amenities",
      render: (amenities) => {
        return (
          <div className="flex flex-wrap gap-0 md:gap-1 justify-center">
            {amenities?.map((item: string) => (
              <p key={item}>{item},</p>
            ))}
          </div>
        );
      },
    },
    {
      title: "Slot Price",
      dataIndex: "pricePerSlot",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
    },
    {
      title: "Room No",
      dataIndex: "roomNo",
    },
    {
      title: "Action",
      render: (transformedProducts) => {
        return (
          <div className="flex gap-3">
            {/* <EditProduct product={transformedProducts} /> */}
            {/* <AddaRoomModal isUpdate={true} transformedProducts={transformedProducts} /> */}
            <Button
              onClick={() => handleDelete(transformedProducts._id)}
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
    return (
      <h3 className="text-center font-bold text-xl md:text-base">Loading...</h3>
    );
  }

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra?.action === "filter") {
      filters?.name?.forEach((item) => setSearch(`${item}`));
    }
  };

  return (
    <div>
      <Table<DataType>
        scroll={{ x: 800 }}
        onChange={onChange}
        sticky={true}
        loading={isFetching}
        columns={columns}
        dataSource={transformedProducts}
      />
    </div>
  );
};

export default AllRooms;

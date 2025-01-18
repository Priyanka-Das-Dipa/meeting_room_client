/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllRoomsQuery } from "../../redux/api/room_management/room.api";
import { Button, Form, Input, Pagination, Select, SelectProps } from "antd";
import NoDataFound from "../commonPages/NoDataFound";
import RoomCard from "../../components/card/RoomCard";
import Loading from "../commonPages/Loading";

const Room = () => {
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(undefined);
  const [capacity, setCapacity] = useState(undefined);
  const [sort, setSort] = useState(undefined);
  // const srcDebounce = useDebounce(search, 1000)
  const [pages, setPages] = useState(1);
  const { data, isLoading } = useGetAllRoomsQuery({
    // search: srcDebounce,
    range,
    capacity,
    sort,
    page: `${pages}`,
  });
  const rooms = data?.data?.result;
  const meta = data?.data?.meta;

  if (isLoading) {
    return <Loading />;
  }
  const capaCityOptions: SelectProps["options"] = [
    {
      value: `0-4`,
      label: `0-4`,
    },
    {
      value: `4-8`,
      label: `4-8`,
    },
    {
      value: `8-12`,
      label: `8-12`,
    },
    {
      value: `12-16`,
      label: `12-16`,
    },
    {
      value: `16-20`,
      label: `16-20`,
    },
    {
      value: `20+`,
      label: `20+`,
    },
  ];

  let maxValue = 0;
  rooms?.forEach((item: any) => {
    if (maxValue < item?.pricePerSlot) {
      maxValue = item.pricePerSlot;
    }
  });
  const priceFilter: SelectProps["options"] = [
    {
      value: `0-5000`,
      label: `0-5000`,
    },
    {
      value: `5000-10000`,
      label: `5000-10000`,
    },
    {
      value: `10000-20000`,
      label: `10000-20000`,
    },
    {
      value: `20000-30000`,
      label: `20000-30000`,
    },
    {
      value: `30000+`,
      label: `30000+`,
    },
  ];

  // handle reset
  const handleReset = () => {
    setSearch("");
    setRange(undefined);
    setCapacity(undefined);
    setSort(undefined);
    setPages(1);
  };
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto">
          <section className="px-4 sm:px-10 md:px-20">
            {/* Fixed Filter Section */}
            <div className="hidden md:flex bg-white w-full border pl-5 p-4 shadow-md sticky top-0 z-50">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                <Form.Item
                  label="Search"
                  layout="vertical"
                  className="font-bold"
                >
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Room Name & Amenities"
                  />
                </Form.Item>
                <Form.Item
                  label="Capacity"
                  layout="vertical"
                  className="font-bold"
                >
                  <Select
                    options={capaCityOptions}
                    value={capacity}
                    placeholder="Filter by Capacity"
                    onChange={(value) => setCapacity(value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Price Range"
                  layout="vertical"
                  className="font-bold"
                >
                  <Select
                    value={range}
                    onChange={(value) => setRange(value)}
                    options={priceFilter}
                    placeholder="Filter by Price Range"
                  />
                </Form.Item>
                <Form.Item
                  label="Sort by Price"
                  layout="vertical"
                  className="font-bold"
                >
                  <Select
                    value={sort}
                    onChange={(value) => setSort(value)}
                    options={[
                      { value: "pricePerSlot", label: "Low To High" },
                      { value: "-pricePerSlot", label: "High to Low" },
                    ]}
                    placeholder="Sort by Price"
                  />
                </Form.Item>
                <Form.Item
                  label="Reset"
                  layout="vertical"
                  className="font-bold"
                >
                  <Button onClick={handleReset}>Reset All</Button>
                </Form.Item>
              </div>
            </div>

            {/* Room Cards Section */}
            <div className="py-6">
              {rooms?.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rooms.map((item: any, idx: number) => (
                    <RoomCard
                      key={idx}
                      pageName="meetingRoom"
                      _id={item._id}
                      name={item.name}
                      amenities={item.amenities}
                      capacity={item.capacity}
                      floorNo={item.floorNo}
                      pricePerSlot={item.pricePerSlot}
                      roomImg={item.roomImg}
                      roomNo={item.roomNo}
                    />
                  ))}
                </div>
              ) : (
                <NoDataFound />
              )}
            </div>

            {/* Pagination */}
            <div className="py-6 flex justify-end items-end">
              <Pagination
                size="small"
                pageSize={pages}
                total={meta?.totalPage}
                //   showSizeChanger
                onChange={(page) => setPages(page)}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Room;

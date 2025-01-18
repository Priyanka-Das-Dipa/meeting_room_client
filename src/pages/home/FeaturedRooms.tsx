import { Link } from "react-router-dom";
import RoomCard from "../../components/card/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/api/room_management/room.api";
import { TRoomData } from "../../types/roomType";
import Loading from "../commonPages/Loading";

const FeaturedRooms = () => {
  const { data: rooms, isLoading } = useGetAllRoomsQuery({
    limit: 6,
    sort: "-createdAt",
  });
  const allRoom = rooms?.data?.result;
  return (
    <>
      <h1 className="text-primary text-center text-2xl md:text-4xl font-bold mb-10">
        Our Featured Room's
      </h1>
      <hr className="w-[250px] text-primary" />
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 lg:gap-10 xl:gap-14">
              {allRoom?.map((item: TRoomData, idx: number) => (
                <div key={idx}>
                  <RoomCard
                    _id={item._id!}
                    name={item.name}
                    amenities={item.amenities}
                    capacity={item.capacity}
                    floorNo={item.floorNo}
                    pricePerSlot={item.pricePerSlot}
                    roomImg={item.roomImg!}
                    roomNo={item.roomNo}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-end items-end my-12">
        <Link to="/meeting_room">
          <button
            type="submit"
            className=" rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-[#4d1b14] dark:bg-sky-700"
          >
            View All
          </button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedRooms;

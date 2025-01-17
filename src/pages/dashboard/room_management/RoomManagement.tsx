import CreateRoomModal from "./CreateRoomModal";
import AllRooms from "./AllRooms";

const RoomManagement = () => {
  return (
    <>
      <div className="mb-12 flex md:flex-row flex-col justify-between">
        <h1 className="md:text-lg font-semibold xl:text-2xl">Create a Room</h1> 
        <CreateRoomModal />
      </div>
      <div>
        <h1 className="text-5xl py-2">All Rooms</h1>
        <AllRooms />
      </div>
    </>
  );
};

export default RoomManagement;

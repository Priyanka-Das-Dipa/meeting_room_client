import AllSlots from "./AllSlots";
import CreateSlotModal from "./CreateSlotModal";

const SlotManagement = () => {
  return (
    <>
      <div className="mb-12 flex md:flex-row flex-col justify-between">
        <h1 className="md:text-lg font-semibold xl:text-2xl">Create a Room</h1>
        <CreateSlotModal />
      </div>
      <div>
        <h1 className="text-5xl py-2">All Slots</h1>
        <AllSlots />
      </div>
    </>
  );
};

export default SlotManagement;

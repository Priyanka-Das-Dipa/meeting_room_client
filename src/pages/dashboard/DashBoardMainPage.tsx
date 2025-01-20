import {
  FaBook,
  FaCalendarAlt,
  FaDoorClosed,
  FaHotel,
  FaList,
  FaUser,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";

const DashBoardMainPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaUser className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Total Users</h4>
          <p className="text-3xl font-bold mt-1">12</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaUserShield className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Total Admins</h4>
          <p className="text-3xl font-bold mt-1">3</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaHotel className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Total Rooms</h4>
          <p className="text-3xl font-bold mt-1">16</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaList className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Total Slots</h4>
          <p className="text-3xl font-bold mt-1">62</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaBook className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Total Booked Rooms</h4>
          <p className="text-3xl font-bold mt-1">8</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaCalendarAlt className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Available Slots</h4>
          <p className="text-3xl font-bold mt-1">40</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaUsers className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Active Users</h4>
          <p className="text-3xl font-bold mt-1">9</p>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-lg shadow-lg text-primary">
        <FaDoorClosed className="text-5xl mr-4 opacity-90" />
        <div>
          <h4 className="text-xl font-semibold">Rooms Occupied</h4>
          <p className="text-3xl font-bold mt-1">6</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMainPage;

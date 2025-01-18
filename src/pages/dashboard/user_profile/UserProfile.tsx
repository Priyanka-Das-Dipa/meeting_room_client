import React from "react";
import { Card } from "antd";
import { useAppSelector } from "../../../redux/hooks";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="flex justify-center items-center">
        <Card hoverable style={{ width: "600px" }}>
          <div className="flex justify-center items-center">
            <img
              className="rounded-full size-44 mb-5"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </div>
          <div>
            <h1 className="text-3xl text-center font-semibold capitalize mb-2">
              My Name is
              {user?.name}
            </h1>
            <p className="text-lg mb-2">
              <span className="font-semibold">{user?.role}</span>
            </p>
          </div>
          {/* card */}
        </Card>
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <Card
            hoverable
            className="flex  justify-center items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-center items-center">
              <FaEnvelope className=" text-4xl mr-4" />
            </div>
            <div className="">
              <p className="text-gray-600 md:text-lg font-semibold">
                {user?.email}
              </p>
            </div>
          </Card>

          {/* Phone */}
          <Card
            hoverable
            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-center items-center">
              <FaPhone className=" text-4xl mr-4" />
            </div>
            <div>
              <p className="text-gray-600 md:text-lg font-semibold">
                {user?.phone}
              </p>
            </div>
          </Card>

          {/* Address */}
          <Card
            hoverable
            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-center items-center">
              <FaMapMarkerAlt className=" text-4xl mr-4" />
            </div>
            <div>
              <p className="text-gray-600 md:text-lg font-semibold">
                {user?.address}
              </p>
            </div>
          </Card>

          {/* Role */}
          <Card
            hoverable
            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-center items-center">
              <FaUser className=" text-4xl mr-4" />
            </div>
            <div>
              <p className="text-gray-600 md:text-lg font-semibold">
                {user?.role}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
// src={user?.profileImage}
//                     alt={user?.name}

import { Card, Tag } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { useGetAllSlotsQuery } from "../../redux/api/room_management/slot.api";

export interface RoomCardProps {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  roomImg: string[];
  _id: string;
  pageName?: string;
}

const FeaturedCard: React.FC<RoomCardProps> = ({
  name,
  roomNo,
  floorNo,
  capacity,
  //   pricePerSlot,
  //   amenities,
  roomImg,
  _id,
}) => {
  //   const roomDetail = {
  //     name,
  //     roomNo,
  //     floorNo,
  //     capacity,
  //     pricePerSlot,
  //     amenities,
  //     roomImg,
  //     _id,
  //   };
  //   const { data } = useGetAllSlotsQuery({ roomId: _id });
  //   const slots = data?.data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <Card
        hoverable
        className="shadow-primary rounded-lg overflow-hidden shadow-lg h-full flex flex-col justify-between"
      >
        <div className="">
          <Slider {...settings} className="room-img-slider">
            {roomImg?.map((img, index) => (
              <div key={index}>
                <img
                  className={`w-full object-cover h-52`}
                  src={img}
                  alt={`Room ${name}`}
                />
              </div>
            ))}
          </Slider>

          <div className="p-2">
            <div className="font-bold text-lg uppercase mb-2 text-center text-primary pt-5">
              {name}
            </div>
            <div className={`text-base  flex flex-wrap justify-evenly gap-1`}>
              <Tag className="p-1  font-semibold font-roboto">
                Room No: {roomNo}
              </Tag>
              <Tag className="p-1 font-semibold font-roboto">
                Floor No: {floorNo}
              </Tag>
              <Tag className="p-1 font-semibold font-roboto">
                Capacity: {capacity}
              </Tag>
              <Tag className="p-1 font-semibold font-roboto">
                {/* Price: <span className="text-primary">${pricePerSlot}</span> */}
              </Tag>
            </div>
            <div className="mt-3 md:mt-3 flex sm:flex-row gap-2">
              {/* <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-center">
                  Available Slots:
                </h4>
                <div className="flex flex-wrap gap-2 text-gray-700 max-h-[100px] overflow-y-auto">
                  {slots?.length ? (
                    slots?.map(
                      (
                        slot: { startTime: string; endTime: string },
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="flex-1 min-w-[45%] p-1  rounded-md text-center"
                        >
                          <Tag>{`${slot?.startTime} - ${slot?.endTime}`}</Tag>
                        </div>
                      )
                    )
                  ) : (
                    <b>No Slot</b>
                  )}
                </div>
              </div> */}
              {/* <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-center">
                  Amenities:
                </h4>
                <ul className="pl-10 list-disc list-inside text-gray-700 ">
                  {amenities?.map((amenity, index) => (
                    <li key={index} className="text-sm">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        {/* button part */}
        <div className="px-4 pt-1 pb-5 flex justify-between gap-3 flex-col sm:flex-row">
          <Link
            to={`/meeting_room/${_id}`}
            className="w-full text-center rounded-md hover:bg-primary px-4 py-2  transition-colors border text-primary border-primary hover:text-white"
          >
            See Details
          </Link>

          {/* <RoomBookingModal room={roomDetail} /> */}
        </div>
      </Card>
    </div>
  );
};

export default FeaturedCard;

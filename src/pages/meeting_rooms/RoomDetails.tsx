import { useParams } from "react-router-dom";
import { useGetAroomsQuery } from "../../redux/api/room_management/room.api";
import { useGetAllSlotsQuery } from "../../redux/api/room_management/slot.api";
import Loading from "../commonPages/Loading";
import NoDataFound from "../commonPages/NoDataFound";
import Slider from "react-slick";
import { Card, Tag } from "antd";
import moment from "moment";

const RoomDetails = () => {
  const params = useParams();
  const { data, isLoading, isFetching } = useGetAroomsQuery(params?.id);
  const room = data?.data;
  // getting slots

  const { data: slots } = useGetAllSlotsQuery({ roomId: params?.id });
  const availableSlots = slots?.data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  if (isLoading || isFetching) {
    return <Loading />;
  }
  return (
    <>
      <div className="pb-10">
        {Object.values(room).length ? (
          <div className="container mx-auto p-4">
            <h1 className="my-6 font-roboto text-3xl font-bold text-center text-primary">
              Details About "{room?.name}" room
            </h1>
            <Card hoverable className="bg-white shadow-lg rounded-lg">
              {/* Image Carousel */}
              <div className="w-full">
                <Slider {...settings}>
                  {room?.roomImg.map((imgUrl: string, index: number) => (
                    <div key={index}>
                      <img
                        src={imgUrl}
                        alt={`Room Image ${index + 1}`}
                        className="w-full mx-auto rounded-md max-h-[450px] object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <h1 className="text-4xl mt-5 text-center font-bold text-gray-800 mb-4">
                {room?.name}
              </h1>
              {/* Room Information */}
              <div className="p-3 md:p-8 flex flex-wrap justify-evenly gap-5">
                <div className="flex-1">
                  <div className=" flex flex-wrap gap-4">

                    {/* Row 1: Room No and Floor */}
                    <div className="flex justify-between w-full">
                      <Tag className="text-base font-semibold md:text-lg w-full flex justify-center items-center ">
                        Room No: {room?.roomNo}
                      </Tag>
                      <Tag className="text-base font-semibold md:text-lg w-full flex justify-center items-center ">
                        Floor: {room?.floorNo}
                      </Tag>
                    </div>

                    {/* Row 2: Capacity and Price */}
                    <div className="flex justify-between w-full ">
                      <Tag className="text-base font-semibold md:text-lg w-full flex justify-center items-center ">
                        Capacity: {room?.capacity} people
                      </Tag>
                      <Tag className="text-base font-semibold md:text-lg w-full flex justify-center items-center ">
                        Price Per Slot: ${room?.pricePerSlot}
                      </Tag>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8 text-center flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Amenities
                  </h2>
                  <ul className="gap-4 text-center">
                    {room?.amenities.map((amenity: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center justify-center "
                      >
                        <Tag className="text-gray-600 text-center my-1">
                          {amenity}
                        </Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    Available Slots
                  </h4>
                  <div className="max-h-[150px] overflow-y-auto">
                    {availableSlots?.length > 0 ? (
                      availableSlots?.map(
                        (
                          items: {
                            startTime: string;
                            endTime: string;
                            date: string;
                          },
                          idx: number
                        ) => (
                          <div className="flex gap-3" key={idx}>
                            <div className="flex gap-2">
                              <Tag>{items?.startTime}</Tag>-
                              <Tag> {items?.endTime}</Tag>
                            </div>
                            <h2>
                              <p>{moment(items?.date).format("MMM Do YY")}</p>
                            </h2>
                          </div>
                        )
                      )
                    ) : (
                      <h4 className="text-base md:text-xl font-semibold text-gray-800 mb-4">
                        Not Available Slots
                      </h4>
                    )}
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-center pb-8 px-4">
                <BookingModal room={room} />
              </div> */}
            </Card>
          </div>
        ) : (
          <NoDataFound />
        )}
      </div>
    </>
  );
};

export default RoomDetails;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Modal } from "antd";
import { useState } from "react";
import { TRoomData } from "../../../types/roomType";
import {
  useCreateRoomMutation,
  useUpdateRoomMutation,
} from "../../../redux/api/room_management/room.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RoomSelect from "../../../components/from/RoomSelect";
import RoomInput from "../../../components/from/RoomInput";
import RoomFrom from "../../../components/from/RoomFrom";
import { BiEdit } from "react-icons/bi";
import { toast } from "sonner";
import { TResponse } from "../../../types/ResponseType";
import { uploadImageToCloudinary } from "../../../utilis/uploadImageToCloudinary";
import { zodResolver } from "@hookform/resolvers/zod";
import RoomImage from "../../../components/from/RoomImage";
import { createRoomValidation, updateRoomValidation } from "../../../validationSchema/createRoomValidation";

const amenitiesOptions = [
  { value: "whiteboard", label: "Whiteboard" },
  { value: "projector", label: "Projector" },
  { value: "videoConferencing", label: "Video Conferencing" },
  { value: "soundSystem", label: "Sound System" },
  { value: "airConditioning", label: "Air Conditioning" },
  { value: "wifi", label: "High-Speed WiFi" },
  { value: "television", label: "Television" },
  { value: "coffeeMachine", label: "Coffee Machine" },
  { value: "printer", label: "Printer" },
  { value: "flipChart", label: "Flip Chart" },
  { value: "loungeArea", label: "Lounge Area" },
];

const CreateRoomModal = ({
  isUpdate,
  transformedProducts,
}: {
  isUpdate?: boolean;
  transformedProducts?: TRoomData | any;
}) => {
  const [file, setFile] = useState([]);
  const [addRoom] = useCreateRoomMutation();
  const [updateRoom] = useUpdateRoomMutation();
  // console.log(file)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    if (!transformedProducts) {
      const id = toast.loading(isUpdate ? "Updating..." : "Creating....");
      const imageUrl = [];
      // send data to cloudinary
      for (let i = 0; i < file.length; i++) {
        const image = file[i];
        const imgurl = await uploadImageToCloudinary(image);
        imageUrl.push(imgurl);
        if (i === file.length - 1) {
          toast.success("Image uploaded", { id });
        }
      }
      const roomData = {
        ...data,
        roomImg: imageUrl,
      };
      const res = (await addRoom(roomData)) as TResponse<any>;
      if (res.error) {
        toast.error(res?.error?.data?.message, { id });
      } else {
        toast.success(res?.data?.message, { id });
        setIsModalOpen(false);
      }
    }
    if (transformedProducts) {
      const updatdata = { ...data, _id: transformedProducts?._id as string };

      try {
        const res = (await updateRoom(updatdata)) as TResponse<any>;
        if (res.error) {
          toast.error(res?.error?.data?.message);
        }
        toast.success(res.data?.message);
        setIsModalOpen(false);
      } catch (error: any) {
        toast.error("Something went wrong");
      }
    }
  };

  let validateData;
  if (!isUpdate) {
    validateData = createRoomValidation;
  } else {
    validateData = updateRoomValidation;
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {isUpdate ? <BiEdit size={20} /> : "Create Rooms"}
      </Button>
      <Modal
        title="Add New Rooms"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Flex justify="center">
          <Col span={24}>
            <RoomFrom
              onSubmit={handleSubmit}
              resolver={zodResolver(validateData)}
            >
              <RoomInput
                name="name"
                placeholder="Room Name"
                label="Room Name"
                defaultValue={isUpdate ? transformedProducts?.name : ""}
              />
              <Flex justify="space-between" gap={2}>
                <RoomInput
                  type="number"
                  className="remove-control"
                  name="roomNo"
                  placeholder="Room No"
                  label="Room No"
                  defaultValue={isUpdate ? transformedProducts?.roomNo : ""}
                />
                <RoomInput
                  type="number"
                  className="remove-control"
                  name="floorNo"
                  placeholder="Floor No"
                  label="Floor No"
                  defaultValue={isUpdate ? transformedProducts?.floorNo : ""}
                />
              </Flex>
              <Flex justify="space-between" gap={2}>
                <RoomInput
                  type="number"
                  className="remove-control"
                  name="capacity"
                  placeholder="Capacity"
                  label="Capacity"
                  defaultValue={isUpdate ? transformedProducts?.capacity : ""}
                />
                <RoomInput
                  type="number"
                  className="remove-control"
                  name="pricePerSlot"
                  placeholder="Price Per Slot"
                  label="Price Per Slot"
                  defaultValue={
                    isUpdate ? transformedProducts?.pricePerSlot : ""
                  }
                />
              </Flex>
              <RoomSelect
                options={amenitiesOptions}
                mode="multiple"
                name="amenities"
                placeholder="Select amenities"
                label="Amenities"
                defaultValue={transformedProducts?.amenities?.map(
                  (items: string) => items
                )}
              />
              {!isUpdate && (
                <RoomImage
                  file={file}
                  setFile={setFile}
                  multiple={true}
                  title="Image"
                  label="Room Image"
                />
              )}

              <Button
                htmlType="submit"
                disabled={!file}
                className="md:px-7 mb-5"
              >
                {isUpdate ? "Update" : "Submit"}
              </Button>
            </RoomFrom>
          </Col>
        </Flex>
      </Modal>
    </>
  );
};

export default CreateRoomModal;

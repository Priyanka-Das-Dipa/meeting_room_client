/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import RoomSelect from "./RoomSelect";
import MultipleImage from "./MultipleImage";
import {
  useCreateRoomMutation,
  useUpdateRoomMutation,
} from "../../redux/api/room_management/room.api";
import { toast } from "sonner";
import { TResponse } from "../../types/ResponseType";
import { uploadImageToCloudinary } from "../../utilis/uploadImageToCloudinary";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const CreateRoomFrom: React.FC = ({ isUpdate, transformedProducts }: any) => {
  const [file, setFile] = useState([]);
  const [addRoom] = useCreateRoomMutation();
  const [updateRoom] = useUpdateRoomMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //     setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //     setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //     setIsModalOpen(false);
  // };

  const onFinish = async (values: any) => {
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
    console.log(values);
  };

  return (
    <Form
      layout="vertical"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["room", "name"]}
        label="Room Name"
        rules={[{ required: true }]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>
      <div className="flex gap-2 w-full">
        <Form.Item
          className="flex-1"
          name={["room", "roomNo"]}
          label="Room No"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          className="flex-1"
          name={["room", "floorNo"]}
          label="Floor No"
          rules={[{ type: "number" }]}
        >
          <Input type="number" className="appearance-none" />
        </Form.Item>
      </div>
      <div className="flex gap-2 w-full">
        <Form.Item
          className="flex-1"
          name={["room", "capacity"]}
          label="Capacity"
          rules={[{ type: "number" }]}
        >
          <Input type="number" className="appearance-none" />
        </Form.Item>
        <Form.Item
          className="flex-1"
          name={["room", "price"]}
          label="Price Slot"
          rules={[{ type: "number" }]}
        >
          <Input type="number" className="appearance-none" />
        </Form.Item>
      </div>
      <RoomSelect />
      <div className="pt-5">
        <MultipleImage />
      </div>
      <div className="flex justify-start items-start -ml-6 pt-5">
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default CreateRoomFrom;

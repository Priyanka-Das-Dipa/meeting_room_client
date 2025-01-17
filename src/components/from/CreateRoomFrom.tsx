import React from "react";

import { Button, Form, Input } from "antd";
import RoomSelect from "./RoomSelect";
import MultipleImage from "./MultipleImage";

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
const onFinish = (values: any) => {
  console.log(values);
};

const CreateRoomFrom: React.FC = () => {
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

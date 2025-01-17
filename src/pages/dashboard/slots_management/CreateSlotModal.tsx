import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  GetProps,
  Input,
  Modal,
  TimePicker,
} from "antd";
import AmenitiesSelect from "../../../components/from/AmenitiesSelect";
import { useState } from "react";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const onOk = (value: DatePickerProps["value"] | RangePickerProps["value"]) => {
  console.log("onOk: ", value);
};

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
// Date picker
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinish = (values: any) => {
  console.log(values);
};
const CreateSlotModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Slot
      </Button>
      <Modal
        title="Create a Slot"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
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
            <Form.Item label="Pick a Date">
              <DatePicker onChange={onChange} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Pick a Date">
              <TimePicker.RangePicker
                style={{ width: "100%" }}
                format=" HH:mm"
                onChange={(value, timeString) => {
                  console.log("Selected Time: ", value);
                  console.log("Formatted Selected Time: ", timeString);
                }}
                onOk={onOk}
              />
            </Form.Item>
            <Form.Item label="Select Room">
              <AmenitiesSelect />
            </Form.Item>

            <div className="flex justify-start items-start -ml-6 pt-5">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>  
      </Modal>
    </>
  );
};

export default CreateSlotModal;

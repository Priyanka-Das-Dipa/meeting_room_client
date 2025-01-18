/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Form, Modal, TimePicker } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import RoomDatePicker from "../../../components/from/RoomDatePicker";
import RoomFrom from "../../../components/from/RoomFrom";
import RoomSelect from "../../../components/from/RoomSelect";
import { toast } from "sonner";
import { TResponse } from "../../../types/ResponseType";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUpdateSlotMutation } from "../../../redux/api/room_management/slot.api";
import { useGetAllRoomsQuery } from "../../../redux/api/room_management/room.api";

const UpdateSlotModal = (slotData: any) => {
  const { slotData: slots }: any = slotData;
  const [startTime, setStarttime] = useState(slotData?.endTime);
  const [endTime, setEndtime] = useState(slotData?.endTime);
  const [updateSlote] = useUpdateSlotMutation();
  const { data, isLoading } = useGetAllRoomsQuery({});
  const allrooms = data?.data?.result;

  const roomsOptions: { label: string; value: string }[] = [];
  allrooms?.forEach((item: { name: string; _id: string }) => {
    roomsOptions.push({
      value: item?._id,
      label: `${item?.name}`,
    });
  });

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
    const updateSlotData = {
      ...data,
      endTime,
      startTime,
    };
    // console.log(updateSlotData)
    const id = toast.loading("Updating....");

    const res = (await updateSlote({
      id: slots?._id,
      updateSlotData,
    })) as TResponse<any>;

    if (res.error) {
      toast.error(res?.error?.data?.message, { id });
    } else {
      toast.success(res?.data?.message, { id });
      setIsModalOpen(false);
    }
  };

  const handleChange: any = (_time: string, timeString: string) => {
    setStarttime(timeString[0]);
    setEndtime(timeString[1]);
  };
  const defaultDate = dayjs(slots?.date);
  const defaultStartTime = dayjs(slots?.startTime, "HH:mm");
  const defaultEndTime = dayjs(slots?.endTime, "HH:mm");

  return (
    <>
      <Button type="primary" onClick={showModal} disabled={slots?.isBooked}>
        Edit
      </Button>
      <Modal
        title="Add New Rooms"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Flex justify="center">
          <Col span={24}>
            <RoomFrom onSubmit={handleSubmit}>
              <RoomSelect
                defaultOpen={true}
                disabled={isLoading}
                options={roomsOptions}
                name="room"
                label="Select Rooms"
                defaultValue={[
                  { label: slots?.room?.name, LabeledValue: slots?.room?._id },
                ]}
              />

              <RoomDatePicker
                label="Select Date"
                name="date"
                defaultValue={defaultDate}
                format="YYYY-MM-DD"
              />

              <Form.Item
                label="Start Time and End Time"
                rules={[{ required: true, message: "Please Select Time" }]}
              >
                <TimePicker.RangePicker
                  format="HH:mm"
                  className="w-full"
                  onChange={handleChange}
                  defaultValue={[defaultStartTime, defaultEndTime]}
                />
              </Form.Item>

              <Button htmlType="submit" className="md:px-7 mb-5">
                Submit
              </Button>
            </RoomFrom>
          </Col>
        </Flex>
      </Modal>
    </>
  );
};

export default UpdateSlotModal;

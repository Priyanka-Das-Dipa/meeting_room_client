/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import { useRegisterMutation } from "../../redux/features/auth/auth.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../types/ResponseType";
import { verifyToken } from "../../utilis/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationSchema } from "../../validationSchema/LoginRegistrationValidation";
import RoomFrom from "../../components/from/RoomFrom";
import { Button, Upload } from "antd";
import RoomInput from "../../components/from/RoomInput";
import RoomTextArea from "../../components/from/RoomTextArea";
import { uploadImageToCloudinary } from "../../utilis/uploadImageToCloudinary";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<any>();
  console.log(profileImage);
  const [registration] = useRegisterMutation();
  const location = useLocation();
  const dynamicNavigate = location?.state?.from?.pathname || "/";

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    const id = toast.loading("Registering...");
    values.fileUpload;
    try {
      let uploadedImageUrl = "";
      if (profileImage) {
        uploadedImageUrl = await uploadImageToCloudinary(profileImage);
        console.log("Uploaded Image URL:", uploadedImageUrl);
      }

      // Step 2: Append the image URL to the form values
      const payload = { ...values, profileImage: uploadedImageUrl };

      // Step 3: Send data to the server for registration
      const res = (await registration(payload)) as TResponse<any>;
      console.log(payload);
      // const res = (await registration(values)) as TResponse<any>;
      if (res?.data?.success) {
        const token = res?.data?.data?.token;
        const user = verifyToken(token);
        dispatch(setUser({ user, token }));
        navigate(dynamicNavigate, { replace: true });
        toast.success(res?.data?.message, { id });
      } else {
        toast.error(
          res?.error?.message ||
            res?.error?.data?.message ||
            res?.data?.message,
          { id }
        );
      }
    } catch (error: any) {
      console.error("Error during registration:", error);
      toast.error(error?.message, { id });
    }
  };
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/loginPage.jpeg')" }}
    >
      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-xl space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <RoomFrom
            onSubmit={onSubmit}
            resolver={zodResolver(RegistrationSchema)}
          >
            <div className="flex gap-2 justify-between md:flex-row flex-col">
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="username" className="block font-medium">
                  Name
                </label>
                <RoomInput
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  placeholder="Enter name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="email" className="block font-medium">
                  Email Address
                </label>
                <RoomInput
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  placeholder="Enter email address"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-between md:flex-row flex-col">
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <RoomInput
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  placeholder="Enter password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <RoomInput
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  placeholder="Enter phone address"
                  name="phone"
                  type="phone"
                />
              </div>
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="address" className="block font-medium">
                Address
              </label>
              <RoomTextArea
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter address"
                name="address"
              />
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="fileUpload" className="block font-medium">
                Upload Image
              </label>
              <Upload
                beforeUpload={(file) => {
                  setProfileImage(file);
                  return false; // Prevent automatic upload
                }}
                maxCount={1}
              >
                <Button>Upload Image</Button>
              </Upload>
            </div>

            <Button
              htmlType="submit"
              className="w-full mt-5 rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-[#4d1b14] dark:bg-sky-700"
            >
              Submit
            </Button>
          </RoomFrom>
          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            Don&apos;t have an account?
            <Link to="/login" className="font-semibold underline text-primary">
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoomFrom from "../../components/from/RoomFrom";
import { Button } from "antd";
import RoomInput from "../../components/from/RoomInput";
import { useLogInMutation } from "../../redux/features/auth/auth.api";
import { useAppDispatch } from "../../redux/hooks";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../../utilis/verifyToken";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../validationSchema/LoginRegistrationValidation";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [loginUser] = useLogInMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const dynamicNavigate = location?.state?.from?.pathname || "/";

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("Logging...");
    try {
      const res: any = await loginUser(values);

      if (res?.data?.success) {
        const token = res?.data?.token;
        const user = verifyToken(token);
        dispatch(setUser({ user, token }));
        navigate(dynamicNavigate, { replace: true });
        toast.success(res?.data?.message, { id: toastId });
      }
      if (res.error) {
        toast.error(res?.error?.message || res?.error?.data?.message, {
          id: toastId,
        });
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/loginPage.jpeg')" }}
    >
      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Sign In Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold">Sign In</h1>
          <RoomFrom
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <RoomInput
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter email"
                type="email"
                name="email"
              />
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <RoomInput
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter password"
                type="password"
                name="password"
              />
            </div>
            <Button
              htmlType="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-[#4d1b14] dark:bg-sky-700"
            >
              Submit
            </Button>
          </RoomFrom>
          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            Don&apos;t have an account?
            <Link
              to="/register"
              className="font-semibold underline text-primary"
            >
              Signup
            </Link>
          </p>
          <div>
            <p>Email: admin@gmail.com</p>
            <p>Password: 123123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

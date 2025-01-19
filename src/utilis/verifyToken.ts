/* eslint-disable @typescript-eslint/no-explicit-any */

import { jwtDecode } from "jwt-decode";
import { TUser } from "../redux/features/auth/authSlice";

export const verifyToken = (token: any): TUser => {
  return jwtDecode(token as string);
};
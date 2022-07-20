import { JWT_SECRET } from "@env";
import JWT from "expo-jwt";
export const isValidScanData = (data) => {
  let d;
  try {
    d = JWT.decode(data, JWT_SECRET);
  } catch (error) {
    return false;
  }
  return d;
};

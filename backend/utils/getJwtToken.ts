import jwt from 'jsonwebtoken';
import config from "../config";


export const getJwtToken = (userId: string) => {
  const secret = config.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the config.");
  }

  return jwt.sign({ userId }, secret, { expiresIn: "1d" });

}


import jwt, { Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "secret";

const JWT_EXPIRES: SignOptions["expiresIn"] =
  (process.env.JWT_EXPIRES as SignOptions["expiresIn"]) || "8h";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
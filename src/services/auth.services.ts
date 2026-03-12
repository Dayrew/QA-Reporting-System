import bcrypt from "bcrypt";
import { findUserByEmail } from "../repositories/auth.repositories";
import { generateToken } from "../utils/jwt";
export const loginService = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    throw new Error("Contraseña incorrecta");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.ROL.name
  });

  return {
    token,
    user
  };
};

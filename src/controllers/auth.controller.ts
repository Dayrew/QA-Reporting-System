import { Request, Response } from "express";
import { loginService } from "../services/auth.services";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginService(email, password);

    res.status(200).json(result);
  } catch (error: any) {
    res.status(401).json({
      message: error.message
    });
  }
};
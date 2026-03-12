
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { prisma } from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/users.routes";

const app: Application = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

export default app;
import { Router } from "express";
import { getUsers } from "../controllers/users.controller";
import { authenticateToken } from "../middlewares/auth.middleware";
import { authorizeRole } from "../middlewares/role.middleware";

const router = Router();

router.get("/", authenticateToken, authorizeRole(["Admin"]), getUsers);

export default router;
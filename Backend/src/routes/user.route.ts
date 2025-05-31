import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";
import { authMiddleware } from "../middlewares/auth.middleware.ts"
const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/logout", userController.logOut);

userRouter.get("/me", authMiddleware, userController.getMe);
userRouter.get("/", authMiddleware, userController.getAllInfoUser);
userRouter.get("/:id", authMiddleware, userController.getInfoUser);
userRouter.patch("/:id", authMiddleware, userController.editUsername);

export { userRouter };
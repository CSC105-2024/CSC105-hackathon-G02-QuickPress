import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/", userController.getAllInfoUser);
userRouter.get("/:id", userController.getInfoUser);
userRouter.patch("/:id", userController.editUsername);


export { userRouter };
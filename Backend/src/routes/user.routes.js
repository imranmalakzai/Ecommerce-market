import { Router } from "express";
import auth from "../middlewares/Auth.js";

//**Import user controllers */
import {
  isAuth,
  login,
  logout,
  register,
} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.route("/registration").post(register);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(auth, logout);
userRouter.route("/is-auth").get(auth, isAuth);

export default userRouter;

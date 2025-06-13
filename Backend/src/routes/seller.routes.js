import { Router } from "express";

//**Import seller controllers*/
import { isAuth, login, logout } from "../controllers/seller.controllers.js";

//**Import seller middlewares */
import authSeller from "../middlewares/AuthSeller.js";

const sellerRouter = Router();

sellerRouter.route("/login").post(login);
sellerRouter.route("/logout").get(authSeller, logout);
sellerRouter.route("/is-auth").get(authSeller, isAuth);

export default sellerRouter;

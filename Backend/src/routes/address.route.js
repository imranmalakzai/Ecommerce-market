import { Router } from "express";

//** Import address Controllers */
import { addAddress, getAddress } from "../controllers/address.controllers.js";

//**Import auth user middlewares */
import authUser from "../middlewares/Auth.js";

const addressRouter = Router();

//** add address endpoints post method */
addressRouter.route("/add").post(authUser, addAddress);

//** get address */
addressRouter.route("/get").get(authUser, getAddress);

export default addressRouter;

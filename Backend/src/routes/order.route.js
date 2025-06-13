import { Router } from "express";

//**import all order route controllers */
import {
  placeOrderCOD,
  getUserOrders,
  allOrderData,
} from "../controllers/order.controllers.js";

//**Import auth middlewares */
import userAuth from "../middlewares/Auth.js";
import AuthSeller from "../middlewares/AuthSeller.js";

const orderRouter = Router();

//** - - - - place order cod - - - - -- -  */
orderRouter.route("/cod").post(userAuth, placeOrderCOD);

//**- - - - - - get single user order details - - - - */
orderRouter.route("/user").get(userAuth, getUserOrders);

//**- - - - - get all the user order details - - - - -  */
orderRouter.route("/seller").get(AuthSeller, allOrderData);

export default orderRouter;

import { Router } from "express";

//** - - - - - - import middlewares  - - - - - - - - - - */
import userAuth from "../middlewares/Auth.js";

//** - - - - - Import cart controllers - - - - - - - - - -  */
import { updateCart } from "../controllers/cart.controllers.js";

const cartRouter = Router();

cartRouter.route("/update").patch(userAuth, updateCart);

export default cartRouter;

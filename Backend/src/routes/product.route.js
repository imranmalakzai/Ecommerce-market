import { Router } from "express";

//** - - - - - Import product routes - - - - - - - - - - - - - - - - -  */
import {
  addProduct,
  productById,
  productList,
  changeStock,
} from "../controllers/product.controllers.js";

//**Import some middlewares */
import { upload } from "../middlewares/Multer.js";
import authSeller from "../middlewares/AuthSeller.js";

const productRouter = Router();

//** add product routes */
productRouter
  .route("/add")
  .post(upload.array("images", 4), authSeller, addProduct);

//**get all products products */
productRouter.route("/list").get(productList);

//**get a single products */
productRouter.route("/id").get(productById);

/** is product in stock */
productRouter.route("/stock").patch(authSeller, changeStock);

export default productRouter;

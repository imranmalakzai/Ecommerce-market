import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

//**import our custom middlewares */
import errorHandler from "./middlewares/ErrorHandler.js";

//**Import user route endpoints */
import userRouter from "./routes/user.routes.js";

//**Import seller route endpoints */
import sellerRouter from "./routes/seller.routes.js";

//**Import product route endpoints */
import productRouter from "./routes/product.route.js";

//**Import cart route endpoints */
import cartRouter from "./routes/cart.route.js";

//**Import address route endpoints */
import addressRouter from "./routes/address.route.js";

//**import order route endpoints  */
import orderRouter from "./routes/order.route.js";

//**Allow host from env */
import { ALLOWED_CORS_ORIGIN } from "./config/env.config.js";

const app = express();

//** injecting of the important middlewares */
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: false, limit: "16kb" }));
app.use(cors({ credentials: true, origin: [ALLOWED_CORS_ORIGIN] }));
app.use(express.static("./public"));

//**injecting of route end points */
app.get("/", (req, res) => res.send("Api is working fine"));

//**address route */
app.use("/api/user", userRouter);

//**Seller routes */
app.use("/api/seller", sellerRouter);

//**Products routes */
app.use("/api/product", productRouter);

//**Cart routes */
app.use("/api/cart", cartRouter);

//**address route */
app.use("/api/address", addressRouter);

//**order route */
app.use("/api/order", orderRouter);

//**Injection of the our custom middlewares */
app.use(errorHandler);

export default app;

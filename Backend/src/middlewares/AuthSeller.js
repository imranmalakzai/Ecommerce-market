import ApiError from "../utils/ApiError.js ";
import { SELLER_EMAIL, SEllER_TOKEN_SECRET } from "../config/env.config.js";
import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
  try {
    //**Getting the token from the cookies */
    const token = req.cookies?.sellerToken || req.cookie;
    if (!token) throw new ApiError("unauthorize", 401);
    //**decode the cookies */
    const decode = jwt.verify(token, SEllER_TOKEN_SECRET);
    if (decode?.email === SELLER_EMAIL) {
      res.seller = decode.email;
      next();
    } else {
      throw new ApiError("unAuthorize");
    }
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message, ...error });
  }
};
export default authSeller;

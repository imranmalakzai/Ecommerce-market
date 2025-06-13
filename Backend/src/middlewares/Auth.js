import { ACCESS_TOKEN_SECRET } from "../config/env.config.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import { userModel } from "../models/user.model.js";
const auth = async (req, res, next) => {
  try {
    //**Getting access token from the cookies */
    const token =
      req.cookies?.accessToken ||
      req.header("authorization")?.replace("Bearer ", " ");

    if (!token) throw new ApiError("Unauthorize", 401);

    //**Decode the token back */
    const decodeToken = jwt.verify(token, ACCESS_TOKEN_SECRET);

    //**Finding the user based on decoded token id and remove password and refresh token fields */
    const user = await userModel
      .findById(decodeToken?.id)
      .select("-password -refreshToken");
    if (!user) throw new ApiError("Invalid Access token", 401);

    //**inject the decoded data into the user request  */
    req.user = user;
    next();
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ ...error, message: error.message });
  }
};

export default auth;

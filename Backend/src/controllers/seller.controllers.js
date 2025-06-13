import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import {
  SELLER_EMAIL,
  SELLER_PASSWORD,
  SEllER_TOKEN_EXPIRY,
  SEllER_TOKEN_SECRET,
} from "../config/env.config.js";
import jwt from "jsonwebtoken";

//**  - - - - - - - - Login into seller account - - - - - - -- - -  */
const login = asyncHandler(async (req, res) => {
  //**checking for  the user input */
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError("email and password is required");

  //**checking the credential*/
  if (email === SELLER_EMAIL && password === SELLER_PASSWORD) {
    //**generating a seller token */
    const sellerToken = jwt.sign({ email }, SEllER_TOKEN_SECRET, {
      expiresIn: SEllER_TOKEN_EXPIRY,
    });

    //**Seller token secret */
    const options = {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    //**Send the cookies into response */
    return res
      .status(200)
      .cookie("sellerToken", sellerToken, options)
      .json({ message: "seller logged in successfully", success: true });
  } else {
    throw new ApiError("Unauthorized", 401);
  }
});

//** - - - - - - - - - logout from the seller account - - - - - - - -  */
const logout = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };
  res
    .status(200)
    .clearCookie("sellerToken", options)
    .json({ message: "logged out", success: true });
});

//** - - - - - - - - is seller auth - - --  --  -  */
const isAuth = asyncHandler(async (req, res) => {
  return res.status(200).json({ success: true });
});

export { login, logout, isAuth };

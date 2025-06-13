import { userModel } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { NODE_ENV } from "../config/env.config.js";

//**Generate Access and refresh Tokens */
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    //**generate token based on the userId */
    const user = await userModel.findById(userId);

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    //**Adding refresh token to the user database */
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw (
      (new ApiError("unable to generate access and refresh tokens", 500), error)
    );
  }
};

//** - - - - Register the user :api/user/registration- - - - - - - -  */
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //** validate for the missing details */
  if (!name || !email || !password) {
    throw new ApiError("All Fields are required", 400);
  }

  //**Validate the user is not been already registered */
  const isUserAlreadyExist = await userModel.findOne({ email });
  if (isUserAlreadyExist)
    throw new ApiError("This user is already registered", 403);

  const user = await userModel.create({ name, email, password });

  //** check if the user created  */
  const userChecking = await userModel
    .findById(user?._id)
    .select("-password -refreshToken");
  if (!userChecking) throw new ApiError("user is not been created", 500);

  //**Getting the refresh token */
  const { accessToken } = await generateAccessAndRefreshTokens(user._id);

  //** configure the the access token options */
  const options = {
    httpOnly: true,
    secure: true,
  };

  res.status(201).cookie("accessToken", accessToken, options).json({
    message: "user created successfully",
    success: true,
    user: userChecking,
  });
});

//** -  - - - Login the user : api/user/login - - - - - - - - - - - - - - -  */
const login = asyncHandler(async (req, res) => {
  //**Fetch the database on the user input */
  const { email, password } = req.body;

  //**Validate the user input first */
  if (!email || !password)
    throw new ApiError("Email and password is required", 400);

  //**Check the user email first is it exist or no */
  const user = await userModel.findOne({ email });
  if (!user) throw new ApiError("unauthorize user not exist", 401);

  //**Checking the password is it correct */
  const isPasswordCorrect = await user.checkPassword(password);
  if (!isPasswordCorrect)
    throw new ApiError("unauthorize incorrect password", 401);

  //**Getting access and refreshTokens */
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  //**  getting logged in user */
  const loggedInUser = await userModel
    .findById(user._id)
    .select("-password -refreshToken");

  //**cookies options */
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json({ message: "logged in successfully", user: loggedInUser });
});

//**- - - - - - - Logout the user:api/user/logout - -- - - - - - - - -  */
const logout = asyncHandler(async (req, res) => {
  //**Find the user base on the auth middleware and delete the refreshToken field */
  const user = await userModel.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );

  //** options the we had already defined for the cookies*/
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: NODE_ENV === "production" ? "none" : "strict",
  };

  //**delete the refresh token and all the cookies from the browser and logged out the user*/
  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json({ message: "logout successfully" });
});

//** - - - - - - - Current logged in user - api/user/is-auth - -  - - - - -  */
const isAuth = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export { register, login, logout, isAuth };

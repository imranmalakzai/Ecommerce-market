import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//**Import jwt secret keys */
import {
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "../config/env.config.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      unique: [true, "This email is already used"],
      required: [true, "email is required"],
    },
    cartItems: {
      type: Object,
      default: {},
    },
    refreshToken: {
      type: String,
    },
  },
  { minimize: false },
  { timestamps: true }
);

//** Hash the password automatically  using pre build middlewares*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

//**Compare the the hash password back */
userSchema.methods.checkPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

//** Generate Access token for the user */
userSchema.methods.generateAccessToken = async function () {
  const token = jwt.sign(
    {
      id: this._id,
      email: this.email,
      password: this.password,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
  return token;
};

//** Generate Refresh token for the user */
userSchema.methods.generateRefreshToken = async function () {
  const token = jwt.sign({ id: this._id }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
  return token;
};

export const userModel = mongoose.model("userModel", userSchema);

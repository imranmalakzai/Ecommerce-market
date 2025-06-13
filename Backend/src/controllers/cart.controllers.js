import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { userModel } from "../models/user.model.js";
//** - - - - - - - - - - -  update user cart data - - - - - - - -  - - - - - - - - - - - - */
const updateCart = asyncHandler(async (req, res) => {
  const { cartItems } = req.body;
  await userModel.findByIdAndUpdate(req.user?._id, { cartItems });
  res.status(200).json({ message: "cart updated successfully", success: true });
});

export { updateCart };

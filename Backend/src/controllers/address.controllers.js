import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { addressModel } from "../models/address.model.js";

//** - - - - - Add address - - - - - - -  */
const addAddress = asyncHandler(async (req, res) => {
  const { address } = req.body;
  if (!address) throw new ApiError("Address and is required");

  //** creating the address */
  const userAddress = await addressModel.create({
    ...address,
    userId: req.user?._id,
  });

  //** send the response to the end points */
  return res
    .status(200)
    .json({
      message: "address added successfully",
      success: true,
      address: userAddress,
    });
});

//** - - - - - - get address - - - - - - - */
const getAddress = asyncHandler(async (req, res) => {
  //**find the address base on the userId */
  const addresses = await addressModel.find({ userId: req.user?._id });

  //**send response to the front end */
  return res.status(200).json({ addresses, success: true });
});
export { addAddress, getAddress };

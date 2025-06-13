import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { productModel } from "../models/product.model.js";
import { orderModel } from "../models/order.model.js";

//** - - - - - placed order COD - - - - - -- - - -   */
const placeOrderCOD = asyncHandler(async (req, res) => {
  const { items, address } = req.body;

  if (!items || !address) throw new ApiError("Add fields are required", 400);

  //** calculate the amount */
  let amount = await items.reduce(async (acc, item) => {
    const product = await productModel.findById(item.product);
    return (await acc) + product.offerPrice * item.quantity;
  }, 0);

  //** add tax charge tow percent */
  amount += Math.floor(amount * 0.02);

  const order = await orderModel.create({
    userId: req.user?._id,
    items,
    amount,
    address,
    paymentType: "COD",
  });

  res.status(200).json({ success: true, message: "order placed successfully" });
});

//** - - - - - - Order details of single user by id - - - - - - -  */
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await orderModel
    .find({
      userId: req.user?._id,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
    .populate("items.product address")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, orders });
});

//** - - - - - - Order details of all user by id - - - - - - -  */
const allOrderData = asyncHandler(async (req, res) => {
  const orders = await orderModel
    .find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
    .populate("items.product address")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, orders });
});

export { placeOrderCOD, getUserOrders, allOrderData };

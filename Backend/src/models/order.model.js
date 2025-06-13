import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
    },
    items: {
      type: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productModel",
          },
          quantity: {
            type: Number,
          },
        },
      ],
    },
    amount: {
      type: Number,
      required: true,
      default: 100,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addressModel",
      required: true,
    },
    status: {
      type: String,
      default: "order placed",
    },
    paymentType: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("orderModel", orderSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    description: {
      type: Array,
      required: [true, "product description is required"],
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
    },
    offerPrice: {
      type: Number,
      required: [true, "offerPrice is required"],
    },
    image: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const productModel = mongoose.model("productModel", productSchema);

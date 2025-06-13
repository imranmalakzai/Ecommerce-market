import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { productModel } from "../models/product.model.js";

//** - - - - - - - Add products :/api/product/add - - - - - - - -  */
const addProduct = asyncHandler(async (req, res) => {
  let productData = JSON.parse(req.body.productData);
  const images = req.files?.map((image) => {
    return image.path;
  });

  const product = await productModel.create({
    ...productData,
    image: images,
  });

  res
    .status(200)
    .json({ success: true, message: "product added successfully", product });
});

//** - - - - - - - get products :/api/product/list- - - - - - - -  */
const productList = asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  res.status(200).json({ success: true, products });
});

//** - - - - - - - get Single product products :/api/product/Id- - - - - - - -  */
const productById = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const product = await productModel.findById(id);
  res.status(200).json({ success: true, product });
});

//** - - - - - - - get Single product products :/api/product/stock- - - - - - - -  */
const changeStock = asyncHandler(async (req, res) => {
  const { id, inStock } = req.body;
  const product = await productModel.findOneAndUpdate({ _id: id }, { inStock });
  res.status(200).json({ message: "stock updated", success: true, product });
});

export { addProduct, productList, productById, changeStock };

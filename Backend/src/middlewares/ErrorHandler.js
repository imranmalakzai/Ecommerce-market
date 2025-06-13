import ApiError from "../utils/ApiError.js";
const errorHandler = (err, _, res, next) => {
  try {
    if (err instanceof ApiError) {
      return res
        .status(err.statusCode || 500)
        .json({ ...err, message: err.message });
    }
    res.status(err.status || 500).json({ message: err.message, ...err });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ ...error, message: error?.message });
  }
};
export default errorHandler;

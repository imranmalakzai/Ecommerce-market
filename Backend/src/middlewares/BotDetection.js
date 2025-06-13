import ApiError from "../utils/ApiError.js";

const botDetection = async (req, res, next) => {
  try {
    const userAgent = req.get("User-Agent") || "";
    if (/bot | crawler | spider | crawling/i.test(userAgent)) {
      throw new ApiError("Bots not allowed", 403);
    }
    next();
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ ...error, message: error?.message });
  }
};

export default botDetection;

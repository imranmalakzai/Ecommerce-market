//**This is the asyncHandler is used to wrap other function into try catch and also async block */
const asyncHandler = (functionToWrap) => {
  return async (req, res, next) => {
    try {
      await functionToWrap(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
export default asyncHandler;

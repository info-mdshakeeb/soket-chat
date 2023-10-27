import ApiErrors from "../errors/ApiError.js";




const globalError = async (error, req, res, next) => {
  let status = error.status || 500
  let message = "Internal serverError );"
  let reason = {};

  if (error instanceof ApiErrors) {
    reason = error.message
  } else if (error instanceof Error) {
    reason = error.message
  }

  res.status(status).json({
    success: false,
    message,
    reason: {
      path: req.originalUrl,
      message: error.message
    },
    stake: error.stake
  })
}
export default globalError
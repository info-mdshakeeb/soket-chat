const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Internal serverError ",
    reason: {
      path: req.originalUrl,
      message: "no route found"
    },
  })
}
export default notFound
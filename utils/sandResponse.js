const sandResponse = (res, data) => {

  const response = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data
  }

  res.status(data.statusCode).json(response)
}
export default sandResponse
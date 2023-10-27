const sandResponse = (res, data) => {

  const statusCode = data.status || 200
  const success = data.success || true
  const message = data.message || "successful"
  const data = data.data || null

  const response = { statusCode, success, message, data }
  res.status(statusCode).json(response)
}
export default sandResponse
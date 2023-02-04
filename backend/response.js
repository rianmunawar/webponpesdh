const response = (status, data, message, res) => {
  res.status(status).json({
    payload: [data],
    message,
    statusCode: status,
  });
};

module.exports = response;

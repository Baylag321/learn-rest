const errorHandler = (err, req, res, next) => {
  console.log(err.stack.cyan.underline);

  const error = { ...err };

  if (error.name === "CastError") {
    error.message = "Буруу бүтэцтэй ID";
    error.statusCode = 400;
  }

  if (error.code === 11000) {
    error.message = "Давхардсан утга оруулсан байна";
    error.statusCode = 400;
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error,
    code: 324,
  });
};

module.exports = errorHandler;

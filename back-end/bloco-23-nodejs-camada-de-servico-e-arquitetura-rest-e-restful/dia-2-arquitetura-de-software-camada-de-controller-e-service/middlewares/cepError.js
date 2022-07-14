module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
        .json({error: {message: err.details[0].message}});
  }
  const statusByError = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };
  const status = statusByError[err.code] || 500;
  return res.status(status).json({error: {message: err.message}});
};

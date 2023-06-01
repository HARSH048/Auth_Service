const validateuserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "email or password missing",
    });
  }

  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "user id is missing",
    });
  }
  next();
};

module.exports = {
  validateuserAuth,
  validateIsAdminRequest,
};

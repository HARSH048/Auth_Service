const UserService = require("../services/user-service");
const userService = new UserService();
const create = async (req, res) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await userService.create(data);
    return res.status(200).json({
      data: user,
      success: true,
      err: {},
      message: "user is created",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: {},
      success: false,
      err: error,
      message: "user is not created",
    });
  }
};

const signin = async (req, res) => {
  try {
    const response = await userService.signin(
      req.body.email,
      req.body.password
    );
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "successfully signed in",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: {},
      success: false,
      err: error,
      message: "something went wrong",
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "user is authenticated and token is valid",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: {},
      success: false,
      err: error,
      message: "something went wrong",
    });
  }
};

const isAdmin = async (req, res) => {
  try {
    const response = await userService.isAdmin(req.body.id);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "successfully fetched whether user is admin or not",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: {},
      success: false,
      err: error,
      message: "something went wrong",
    });
  }
};

module.exports = {
  create,
  signin,
  isAuthenticated,
  isAdmin,
};

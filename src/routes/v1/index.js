const express = require("express");
const Usercontroller = require("../../controllers/user-controller");
const { AuthRequestValidators } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidators.validateuserAuth,
  Usercontroller.create
);
router.post(
  "/signin",
  AuthRequestValidators.validateuserAuth,
  Usercontroller.signin
);

router.get("/isAuthenticated", Usercontroller.isAuthenticated);
router.get(
  "/isAdmin",
  AuthRequestValidators.validateIsAdminRequest,
  Usercontroller.isAdmin
);

module.exports = router;

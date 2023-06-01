const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiroutes = require("./routes/index");
const app = express();
const UserService = require("./services/user-service");
const db = require("./models/index");
const { User, Role } = require("./models/index");

const serverstarted = () => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", apiroutes);
  app.listen(PORT, async () => {
    // const userService = new UserService();
    // const newToken = userService.createToken({
    //   email: "harsh@admin.com",
    //   id: 2,
    // });
    // console.log("new token is", newToken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoQGFkbWluLmNvbSIsImlkIjoyLCJpYXQiOjE2ODMzMTQzMTQsImV4cCI6MTY4MzQwMDcxNH0._AKh2B1jeaG40qXb3AfO9glS1xYck8cHvEO6ZUDKj3U";
    // const res = userService.verifyToken(token);
    // console.log(res);
    console.log(`server is started at ${PORT}`);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    const u1 = await User.findByPk(3);
    const r1 = await Role.findByPk(2);
    u1.addRole(r1);
  });
};

serverstarted();

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
    console.log(`server is started at ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    // const u1 = await User.findByPk(3);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);
  });
};

serverstarted();

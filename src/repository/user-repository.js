const { User, Role } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async destroy(userid) {
    try {
      await User.destroy({
        where: {
          id: userid,
        },
      });
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getById(userid) {
    try {
      const user = await User.findByPk(userid, {
        attributes: ["email", "id"],
      });
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
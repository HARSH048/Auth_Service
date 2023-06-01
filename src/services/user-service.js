const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { KEY } = require("../config/serverConfig");
const { use } = require("../routes/v1");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }

  async delete(userid) {
    try {
      await this.userRepository.delete(userid);
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }

  async signin(email, plainPassword) {
    try {
      // step-1-> fetch the user using email
      const user = await this.userRepository.getByEmail(email);

      // step-2-> compare incoming plain password with store password
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("password doesn't match");
        throw { error: "incorrect password" };
      }

      // step-3-> if password matches create token
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("something went wrong in signin process");
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: "invalid token" };
      }
      const user = this.userRepository.getById(response.id);
      if (!user) {
        throw { error: "no user with corresponding token" };
      }
      return user.id;
    } catch (error) {
      console.log("something went wrong in auth process");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("something went wrong in token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const res = jwt.verify(token, KEY);
      return res;
    } catch (error) {
      console.log("something went wrong in token validation", error);
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("something went wrong in password comparison");
      throw error;
    }
  }

  isAdmin(userId) {
    try {
      return this.userRepository.isAdmin(userId);
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }
}

module.exports = UserService;

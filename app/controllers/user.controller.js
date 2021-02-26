const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.isLogin = (req, res) => {
  User.findByPk(req.userId).then((user) => {
    console.log(user.username);
    user.getRoles().then((roles) => {
      let role;
      for (let i = 0; i < roles.length; i++) {
        role = roles[i].name;
      }
      res.status(200).send({
        username: user.username,
        email: user.email,
        role: role,
      });
    });
  });
};

const pool = require("../models/pool");

exports.loginPageGet = (req, res) => {
  res.render("login");
};

exports.registerPageGet = (req, res) => {
  res.render("register");
};

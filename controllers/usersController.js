const pool = require("../models/pool");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 255 characters.";

const validateUser = [
  body("firstname")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 255 })
    .withMessage(`First name ${lengthErr}`),
  body("lastname")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 255 })
    .withMessage(`Last name ${lengthErr}`),
  body("username")
    .trim()
    .isLength({ max: 255 })
    .withMessage("Bio must be within 255 characters"),
];

exports.loginPageGet = (req, res) => {
  res.render("login");
};

exports.registerPageGet = (req, res) => {
  res.render("register");
};

exports.registerPagePost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("register", { errors: errors.array() });
    }
    const { firstname, lastname, username, password, confirmPassword } =
      req.body;

    console.log(password);
    console.log(confirmPassword);
    if (password != confirmPassword)
      return res
        .status(400)
        .render("register", { errors: [{ msg: "Passwords do not match" }] });

    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      "INSERT INTO users (firstname, lastname, username, password, member_status) VALUES ($1, $2, $3, $4, $5)",
      [firstname, lastname, username, hashedPassword, true]
    );
    console.log({ firstname, lastname, username, hashedPassword });
    res.redirect("/");
  },
];

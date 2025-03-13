require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.DATABASE_USER,
  database: "clubhouse",
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

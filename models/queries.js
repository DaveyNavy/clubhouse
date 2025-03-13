const pool = require("./pool");

async function test() {
  const { rows } = await pool.query("SELECT * FROM users");
  console.log(rows);
}

test();

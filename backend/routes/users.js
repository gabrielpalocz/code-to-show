var express = require('express');
var router = express.Router();
const pool = require("../db");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
      const { rows } = await pool.query("SELECT * FROM users ORDER BY id ASC");
      res.json(rows)
  } catch (err) {
      console.error(err.message);
      res.json(err.message);
  }
});

/* GET a user to check the Login. */
router.get("/login/:email/:password", async(req, res) => {
  try {
      const { email, password } = req.params;
      const todo = await pool.query("SELECT * from users where email = $1 AND password = $2", [ email, password ]);
      res.json(todo.rows)
  } catch (err) {
      console.error(err.message);
  }
});

/* POST a new user. */
router.post("/", async(req,res) => {
  try{
      const { firstName, lastName, email, password } = req.body;
      const newUser = await pool.query("INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [ firstName, lastName, email, password ]);       
      res.json(newUser.rows[0]);
  }catch (err) {
      console.error(err.message);
      res.status(500).send({ error: err.message });
  }
});

/* PUT a existing user. */
router.put("/:id", async(req,res) => {
  try {
      const { id } = req.params;
      const { firstName, lastName, email, password } = req.body;
      const updateUser = await pool.query("UPDATE users SET name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5 RETURNING *",[ firstName, lastName,, email, password, id ]);
      console.log(updateUser.rows[0])
      res.json(updateUser.rows[0]);        
  } catch (err) {
      console.error(err.message);
      res.json(err.message);
  }
});

/* DELETE a existing user. */
router.delete("/:id", async(req,res) =>{
  try {
      const { id } = req.params;
      const deleteUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id])
      console.log(deleteUser.rows[0])
      res.json(deleteUser.rows[0])
  } catch (err) {
      console.error(err.message);  
      res.json(err.message);      
  }
});


module.exports = router;

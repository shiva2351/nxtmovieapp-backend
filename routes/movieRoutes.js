const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all movies
router.get('/', async (req, res) => {
  console.log("movies/")
  const [rows] = await db.query('SELECT * FROM movies');
  res.json(rows);
});

router.get('/s', async (req, res) => {
  console.log("test")
  res.json("rows");
});

// Add a movie
router.post('/', async (req, res) => {
  const { task } = req.body;
  const [result] = await db.query('INSERT INTO movies (task) VALUES (?)', [task]);
  res.json({ id: result.insertId, task, completed: false });
});

// Toggle complete
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('UPDATE movies SET completed = NOT completed WHERE id = ?', [id]);
  res.json({ success: true });
});

// Delete movie
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM movies WHERE id = ?', [id]);
  res.json({ success: true });
});

module.exports = router;

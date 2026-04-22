const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./hymnal.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to hymnal database');
  }
});

// Get all hymns
app.get('/api/hymns', (req, res) => {
  db.all("SELECT * FROM hymns ORDER BY number", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get single hymn
app.get('/api/hymns/:id', (req, res) => {
  db.get("SELECT * FROM hymns WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// Increment views
app.post('/api/hymns/:id/view', (req, res) => {
  db.run("UPDATE hymns SET views = views + 1 WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ updated: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
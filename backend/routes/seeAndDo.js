import express from 'express';
import pool from '../db.js';
const router = express.Router();

// GET all
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM see_and_do');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET by id
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM see_and_do WHERE id = ?', 
            [req.params.id]
        );
        if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST add new
router.post('/', async (req, res) => {
    const { title, description, image_url, category } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO see_and_do (title, description, image_url, category) VALUES (?, ?, ?, ?)',
            [title, description, image_url, category]
        );
        res.status(201).json({ id: result.insertId, message: 'Created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT update
router.put('/:id', async (req, res) => {
    const { title, description, image_url, category } = req.body;
    try {
        await pool.query(
            'UPDATE see_and_do SET title=?, description=?, image_url=?, category=? WHERE id=?',
            [title, description, image_url, category, req.params.id]
        );
        res.json({ message: 'Updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM see_and_do WHERE id = ?', [req.params.id]);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
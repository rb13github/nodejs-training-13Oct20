const { findAll } = require('./BookService');
const express = require('express');
const router = express.Router();

router.get('/list', async (req, res) => {
    try {
        const books = await findAll();
        res.status(200).json(books)
    }
    catch (err) {
        res.status(400).json({ message: 'Books Not found' })
    }
});

module.exports = router;
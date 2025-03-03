const express = require('express');
const router = express.Router();

// Step tracking endpoint
router.post('/', (req, res) => {
    const { steps, user } = req.body;
    if (!steps || !user) return res.status(400).json({ error: "Missing data" });
    res.json({ message: "Steps recorded", user, steps, btcEarned: steps * 0.0000001 });
});

module.exports = router;

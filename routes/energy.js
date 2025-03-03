const express = require('express');
const router = express.Router();

// Energy refill endpoint
router.post('/refill', (req, res) => {
    res.json({ message: "Energy refilled!", newEnergyLevel: 100 });
});

module.exports = router;

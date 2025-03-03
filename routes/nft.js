const express = require('express');
const router = express.Router();

// NFT badge retrieval
router.get('/', (req, res) => {
    res.json({ badges: [{ name: "OG User", boost: "2x BTC" }, { name: "Marathon Master", boost: "1.5x BTC" }] });
});

module.exports = router;

const express = require("express");
const { getBTCBalance, sendBTCTransaction } = require("../controllers/btcController");

const router = express.Router();

// ✅ API status check
router.get("/status", (req, res) => {
    res.json({ message: "BTC API is running!" });
});

// ✅ Correct BTC balance and transaction routes
router.get("/balance/:address", getBTCBalance);
router.post("/send", sendBTCTransaction);

// ✅ Export the router ONCE (remove duplicates)
module.exports = router;


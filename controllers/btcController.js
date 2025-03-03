const axios = require("axios");
require("dotenv").config();

// ✅ Get BTC Balance
exports.getBTCBalance = async (req, res) => {
    try {
        const { address } = req.params;

        console.log("🚀 Fetching BTC balance for:", address);

        const url = `https://btcbook.nownodes.io/api/v2/address/${address}`;
        console.log("🔗 Making request to:", url);

        const response = await axios.get(url, {
            headers: { "api-key": process.env.NOWNODES_API_KEY }
        });

        console.log("✅ API Response:", JSON.stringify(response.data, null, 2));
        res.json(response.data);
    } catch (error) {
        console.error("❌ BTC API Error:", error.response ? error.response.data : error.message);
        res.status(500).json({
            error: error.response ? error.response.data : "Unknown error"
        });
    }
};

// ✅ Send BTC Transaction (if supported by NOWNODES)
exports.sendBTCTransaction = async (req, res) => {
    try {
        const { toAddress, amount } = req.body;

        console.log("🚀 Sending BTC to:", toAddress, "Amount:", amount);

        const url = "https://btcbook.nownodes.io/api/v2/send";
        const response = await axios.post(url, {
            address: toAddress,
            amount: amount
        }, {
            headers: { "api-key": process.env.NOWNODES_API_KEY }
        });

        console.log("✅ Transaction Response:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("❌ BTC Transaction Error:", error.response ? error.response.data : error.message);
        res.status(500).json({
            error: error.response ? error.response.data : "Transaction failed"
        });
    }
};


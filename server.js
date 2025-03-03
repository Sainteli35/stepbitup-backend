// StepBitUp Backend - Node.js/Express API
// This backend handles step tracking, BTC rewards, energy system, and NFT badges.

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Step Tracking API
const stepRoutes = express.Router();
stepRoutes.post('/', (req, res) => {
    const { steps, user } = req.body;
    if (!steps || !user) return res.status(400).json({ error: "Missing data" });
    res.json({ message: "Steps recorded", user, steps, btcEarned: steps * 0.0000001 });
});
app.use('/api/steps', stepRoutes);

// BTC Wallet API
const btcRoutes = express.Router();
btcRoutes.get('/', (req, res) => {
    res.json({ balance: "0.00321000 BTC" });
});
btcRoutes.post('/withdraw', (req, res) => {
    const { amount, address } = req.body;
    if (!amount || !address) return res.status(400).json({ error: "Missing withdrawal data" });
    res.json({ message: "BTC withdrawal request submitted", amount, address });
});
app.use('/api/btc', btcRoutes);

// Energy System API
const energyRoutes = express.Router();
energyRoutes.post('/refill', (req, res) => {
    res.json({ message: "Energy refilled!", newEnergyLevel: 100 });
});
app.use('/api/energy', energyRoutes);

// NFT Badge API
const nftRoutes = express.Router();
nftRoutes.get('/', (req, res) => {
    res.json({ badges: [{ name: "OG User", boost: "2x BTC" }, { name: "Marathon Master", boost: "1.5x BTC" }] });
});
app.use('/api/nft', nftRoutes);

app.listen(PORT, () => console.log(`StepBitUp Backend running on port ${PORT}`));

// GitHub Integration Instructions
// 1. Run `git init` if not initialized.
// 2. Add remote repository: `git remote add origin https://github.com/yourusername/StepBitUp-backend.git`
// 3. Commit and push updates: 
//    git add .
//    git commit -m "Initialized backend with APIs"
//    git push origin main


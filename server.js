const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Default Route
app.get("/", (req, res) => {
    res.send("StepBitUp Backend is running...");
});

// Import Routes
const btcRoutes = require("./routes/btcRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/btc", btcRoutes);
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));


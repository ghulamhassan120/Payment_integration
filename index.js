const express = require("express");
const router = require("./routes/payment.route");
require("dotenv").config();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Express Server is Running 🚀",
  });
});

// Routes
app.use("/api/payment", router);
console.log(process.env.STRIPE_SECRET_KEY)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
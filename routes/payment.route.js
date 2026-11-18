const express = require("express");
const { PaymentController ,PaymentCreate} = require("../controller/PaymentController");
const router = express.Router();


router.get("/", PaymentController);
router.post("/submit", PaymentCreate);
router.get('/success', (req, res) => {
    res.send('Payment Successful!');
});
router.get('/cancel', (req, res) => {
    res.send('Payment Cancelled!');
});
module.exports = router;
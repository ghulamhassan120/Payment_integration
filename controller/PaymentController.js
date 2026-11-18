const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const PaymentController = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "form.html"));
};
const PaymentCreate = async (req, res) => {
  const { amount } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "My Product",
          },
          unit_amount: Number(amount) * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:5000/api/payment/success`,
    cancel_url: "http://localhost:5000/api/payment/cancel",
  });

  res.redirect(303, session.url);
};

module.exports = { PaymentController, PaymentCreate };

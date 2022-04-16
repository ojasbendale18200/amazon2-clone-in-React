const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KoMQjSDJ3Zl7iuAi8er82oNq2BqdqjwJqzESTrcxTLGeeTz03liicCcFOTqkf7W5nc7crCgVWTMpIx92DdIFxBy00swqCf46y"
);

// API

// -App config
const app = express();

// Middlewares
// eslint-disable-next-line object-curly-spacing
const corsOptions = {
  origin: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.send(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

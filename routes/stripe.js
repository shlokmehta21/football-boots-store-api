const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);
// const KEY = process.env.STRIPE_SEC_KEY;
const stripe = require("stripe")(
  "sk_test_51MgutSFsqqY33wXSpu4KmJeUwRWbnoooHAZQLWhGznhRVUHHE7lYEPpk4tCqOpagwRkYHtUeRv1GZJRJION1mSAK00rWyRU0xv"
);

router.post("/payment", (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

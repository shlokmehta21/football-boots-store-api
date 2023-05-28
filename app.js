const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/orders");
const StripeRoute = require("./routes/stripe");
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("Connected to Database");
});

// var allowedOrigins = [
//   "https://footballshoestore.netlify.app",
//   "https://footballshoestoreadmin.netlify.app",
//   "https://football-store-api.onrender.com",
//   "http://localhost:3000",
// ];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

app.use(function(req, res, next) {
      // res.header("Access-Control-Allow-Origin", "*");
      const allowedOrigins = [
         "https://footballshoestore.netlify.app",
         "https://footballshoestoreadmin.netlify.app",
         "https://football-store-api.onrender.com",
         "http://localhost:3000",
         ];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
           res.setHeader('Access-Control-Allow-Origin', origin);
      }
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Access-Control-Allow-credentials", true);
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
      next();
    });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/checkout", StripeRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("Server Running On port 5001");
});

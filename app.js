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

app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("Connected to Database");
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

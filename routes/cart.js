const {
  createCart,
  updateCart,
  deleteCart,
  getCartItems,
  getAllCarts,
} = require("../controllers/cartController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, createCart);

router.put("/:id", verifyTokenAndAuthorization, updateCart);

router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

router.get("/find/:userId", verifyTokenAndAuthorization, getCartItems);

router.get("/", verifyTokenAndAdmin, getAllCarts);

module.exports = router;

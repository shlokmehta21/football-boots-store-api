const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getOrderItems,
  getOrderStats,
} = require("../controllers/orderController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, createOrder);

router.put("/:id", verifyTokenAndAdmin, updateOrder);

router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);

router.get("/find/:userId", verifyTokenAndAuthorization, getOrderItems);

router.get("/", verifyTokenAndAdmin, getAllOrders);

//Monthly income
router.get("/income", verifyTokenAndAdmin, getOrderStats);

module.exports = router;

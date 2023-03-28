const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//GET USER STATS
router.get("/userstats", verifyTokenAndAdmin, getUserStats);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//GET USER
router.get("/:id", verifyTokenAndAdmin, getUser);

// GET ALL USER
router.get("/", verifyTokenAndAdmin, getAllUsers);

module.exports = router;

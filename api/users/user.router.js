const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
// router.get("/", checkToken, getUsers);
router.get("/getUsers",checkToken,  getUsers);
router.post("/createUser", createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/updateUser",checkToken,  updateUsers);
router.delete("/deleteUser",checkToken,  deleteUser);

module.exports = router;

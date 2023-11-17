const router = require("express").Router();
const { validateNewUser } = require("./../Validator/validator");
const {body} = require("express-validator")
const { createUser, getAllUsers, getUserByUserId, updateUser, deleteUser } = require("./../Service/services");




router.post("/addUser", [body('email', 'Invalid does not Empty').not().isEmpty()], createUser);

router.get("/getAllUsers", getAllUsers);

router.get("/getUserByUserId", getUserByUserId);

router.put("/updateUser", updateUser);

router.delete("/deleteUser", deleteUser);


module.exports = router;
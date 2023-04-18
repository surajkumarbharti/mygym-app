const express = require("express");
const router = express.Router();
const UserController = require("../Controller/userController.js")


router.post('/userresistor', UserController.createUser)
// router.post('/userlogin',UserController.loginUser)
 router.get('/alluser',UserController.getAllUser)



module.exports = router;
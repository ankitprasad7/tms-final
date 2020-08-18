var user=require('../modules/userRegister')
var users=require('../modules/userlogin')



var express = require('express');
var router = express.Router();


//-------------------------------student----------------------------------------------------

router.post('/signup',user.signupUser)
router.post('/login',users.loginuser)




module.exports = router;

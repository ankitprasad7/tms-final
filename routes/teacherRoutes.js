var express = require('express');
var router = express.Router();

var user1=require('../modules/teacherRegister')
var users1=require('../modules/teacherlogin')
var course=require('../modules/addcourse')

router.post('/signup',user1.signupteacher)
router.post('/login',users1.loginuser)
router.post('/addcourse',course.addCourses)
router.post('/addstudent',course.addNewStudent)


module.exports = router;

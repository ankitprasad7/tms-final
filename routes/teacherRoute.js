var express = require('express');
var router = express.Router();
const middle=require('../modules/middlewares')
const teacher=require('../modules/teacherModule')

router.post('/register',teacher.addTeacher);
router.get('/login',middle.validate,teacher.login);


module.exports = router;

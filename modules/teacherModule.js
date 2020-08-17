const teacher = require("../models/teacher");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function addTeacher(req, res) {
  let user = req.body;
  let username = req.body.username;
  teacher.find({ username: username }).exec((data) => {
    if (data.length >= 1)
      return res.status(409).send({ message: "Username already exists" });
    else 
    {
    const newTeacher = new teacher({
    username: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newTeacher.save((err) => {
      if (err) {
        return res.status(401, err);
      }
      res.status(200).send({ message: "Registered" });
    });
  }
  });
}

function login(req, res) {
    const email = req.body.email;
      const pass = req.body.password;
      const user =  teacher.findOne({ email: email });
      bcrypt.compare(pass, user.password, function (err, result) {
        if (err) {
          res.status(404, "incomplete data");
        }
        if (result == false) {
          return res.send("invalid credentials");
        } else {
          var token = jwt.sign({ ...user, _id: user._id }, "shhhhh", {
            expiresIn: "1h",
          });
          //console.log(user._id);
          return res.status(200).send({ message: "Logged in successfully", token: token });
        }
      });
  }
module.exports={
    addTeacher,
    login
}

const teacher = require("../models/teacher");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function addTeacher(req, res, next) {
  console.log(req.body);
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;
  if (password !== confirmPassword) {
    return res.json({
      message: "Incorrect password",
    });
  } else {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        res.json({
          message: "something is wrong",
          error: err,
        });
      } else {
        console.log(hash);
        var data = new teacher({
          username: username,
          email: email,
          password: hash,
        });
        data
          .save()
          .then((doc) => {
            res.status(200).json({
              message: "Registered successfully",
              results: doc,
            });
          })
          .catch((err) => {
            res.json(err);
          });
      }
    });
  }
}

function login(req, res) {
  const email = req.body.email;
  const pass = req.body.password;
  const user = teacher.findOne({ email: email });
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
      return res
        .status(200)
        .send({ message: "Logged in successfully", token: token });
    }
  });
}
module.exports = {
  addTeacher,
  login,
};

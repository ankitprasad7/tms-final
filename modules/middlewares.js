

  function validate(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    if (!email || !password) {
      return res.send("enter email or password");
    }
    next();
  }
  function authToken(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
  
      var decode = jwt.verify(token, "shhhhh");
      console.log(decode._doc);
      next();
    } catch (err) {
      res.status(401).send("invalid token");
    }
  }
    module.exports={
        validate,
        authToken
    }
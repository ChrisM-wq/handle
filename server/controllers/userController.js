const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.login = (req, res) => {
  res.status(200).json({ 
    status: 'success',
    message: 'User successfully logged in.'
  })
};

exports.register = async (req, res) => {
  const user = await User.findOne({ email: req.body.username});
  if (user) res.send("User Already Exists");
  if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      const newUser = new User({
          email: req.body.username,
          password: hashedPassword
      });
      newUser.save();
      res.send("User Created")
  };
};


exports.getUser = (req, res) => {
    res.status(200).json({ user: req.user });
};

exports.logout = (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session.destroy(function(err) {
      if (err) {
        console.log('Error destroying session:', err);
      }
    });
  });
  res.redirect('http://localhost:3000/');
}
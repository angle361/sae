const User = require("./models/users");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      
      User.findOne({ username: username })
      .then((user) => {
    
        if (!user) return done(null, false);
        
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      })
      .catch(err => {
        console.error(err);
      });

      
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id })
    .then((user) => {
      if (!user) {
        return cb(null, false);  // User not found
      }
      const userInformation = {
        username: user?.username,
      };
      cb(null, userInformation);
    });
  });
};
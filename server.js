const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const notification = require("./models/notifications");
const User = require('./models/users');
//const RegisteredUser = require('./models/registeredUsers');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

const DB = "mongodb+srv://angle361:Test123@cluster0.ful1v.mongodb.net/saeDB?retryWrites=true&w=majority";
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
// then(() => {
//   console.log("connection successful");
// });

//AUTHENTICATION SETUP
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


app.get('/notifications', (req, res) => {
  notification.find(function (err, notifications) {
    // var myJsonString = JSON.parse(notifications);
    res.send(notifications);
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // res.send("Successfully Authenticated");
         res.redirect("/");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc){ 
     //res.send("already registered");
      res.redirect("/");
    }
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      //res.send("registered");
      res.redirect("/");
      //window.location.assign("http://localhost:3000/");
    }
  });
});

app.get("/registerforevent",(req,res)=>{
  res.send(req.user);
  console.log(req.user);
})

// app.post("/registerforevent",(req,res)=>{
//   const newRegisteredUser = new RegisteredUser({
//     username: req.body.username,
//     email: req.body.email,
//   });
//   newRegisteredUser.save();
//   res.redirect("/");

// });
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
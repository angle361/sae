const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const bodyParser = require('body-parser');
const notification = require("./models/notifications");
const User = require('./models/users');
const RegisteredUser = require('./models/regisusers');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});


app.use(bodyParser.urlencoded({ extended: true }));

//database connection
const DB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ful1v.mongodb.net/saeDB?retryWrites=true&w=majority`;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("connection successful");
}).catch((e)=>{
  console.log(e);
  console.log("no connection ");
});

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
app.get('/app', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/notifications', (req, res) => {
  
  notification.find({}).exec()
  .then(notifications =>
    res.send(notifications)
  )
  .catch(err => {
    console.error(err);
  });

});


//login
app.post("/login", async (req, res) => {
;
  try {
    await passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      

      if (!user) {
        console.log("User not found");
        return res.status(400).send("User not found");
      }

      req.logIn(user, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Internal Server Error");
        }

        console.log("User logged in");
        return res.status(200).send("Login Successful");
      });
    })(req, res);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
});

//logout
app.post("/logout", (req,res) => {
  
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res.status(500).send('Error during logout');
      }
   // console.log(req.user);
    console.log("User logged out");
    return res.status(200).send("User logged out");
    
    });
    
  } else {
    console.log("No user to log out");
    return res.status(401).send('No user to log out');
  }
});


app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }) 
    .then(async (doc) => {
      
      if (doc){ 
      //res.send("already registered");
        return res.status(200).send("User already registered");
      }
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        //res.send("registered");
        return res.status(200).send("User registered");
        
      }
      
    })
    .catch(err => {
      console.error(err);
    });

});

app.get("/user",(req,res)=>{
  
  res.send(req.user);
  //console.log(req.user);
})

app.post("/event/register",(req,res)=>{
  const newRegisteredUser = new RegisteredUser({
    username: req.body.username,
    email: req.body.email
  });
  newRegisteredUser.save();
  return res.status(200).send("User registered for event");

});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

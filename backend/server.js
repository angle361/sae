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
const port = process.env.PORT || 5001;

app.use(bodyParser.json());

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://sae-iitbhu.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
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
  try {
    await passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }

      if (!user) {
        console.log("User not found");
        return res.redirect("https://sae-iitbhu.vercel.app/login");
      }

      req.logIn(user, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Internal Server Error");
        }

        console.log("User logged in");
        return res.redirect("https://sae-iitbhu.vercel.app/");
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
    console.log("User Logged out");
    return res.redirect("/");
    
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
        res.redirect("/login");
      }
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        //res.send("registered");
        res.redirect("/login");
        
      }
      }
    )
    .catch(err => {
      console.error(err);
    });

});

app.get("/getUser",(req,res)=>{
  
  res.send(req.user);
  //console.log(req.user);
})

app.post("/registerforevent",(req,res)=>{
  const newRegisteredUser = new RegisteredUser({
    username: req.body.username,
    email: req.body.email
  });
  newRegisteredUser.save();
  res.redirect("/");

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

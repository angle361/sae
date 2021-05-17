const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const message = require("./notifications");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const DB= "mongodb+srv://angle361:Test123@cluster0.ful1v.mongodb.net/saeDB?retryWrites=true&w=majority";
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology: true });
// then(() => {
//   console.log("connection successful");
// });

  

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


app.get('/notifications',(req,res)=>{
  message.find(function(err,notifications){
    // var myJsonString = JSON.parse(notifications);
      res.send(notifications);
  });
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

var express = require('express')
var app = express();
var User=require('./models/users')
var mongoose = require('mongoose');
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get("/",function(req,res,next){
  res.render("index")
})
app.post("/login",function(req,res,next){
  var username=req.body.username;
  var password=req.body.password;
  console.log(username)
})
app.post("/signup",function(req,res,next){
  var username=req.body.username;
  var password=req.body.password;
  var name=req.body.first_name;
  var lastname=req.body.last_name;
  var mob_no=req.body.mob_no;
  const user = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name: name,
            last_name: lastname,
            user_name:username,
            mob_no:mob_no,
            password: password
          });
user.save().then(result => {
              console.log(result);
              res.status(201).json({
                message: "User created successfully"
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
})
app.get("/signup",function(req,res,next){
  res.render("signup")
})
//connect to mongodb by mongoose
mongoose.connect('mongodb://localhost:27017/LABY')
    .then(() =>console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.listen(8080)

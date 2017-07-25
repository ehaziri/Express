var express = require("express");
// console.log(express);
var app = express();
// console.log(app);
// app.get('/', function(request, response) {
//   response.send("<h1>Hello Express</h1>");
// })
app.use(express.static(__dirname + '/static'));
console.log(__dirname);
//
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));
//
// var session = require('express-session');
// app.use(session({secret: 'codingdojorocks'}));
//
// app.get('/users', function(request, response) {
//   var users_array = [
//     {name: "Michael", email: "michael@codingdojo.com"},
//     {name: "Jay", email: "jay@codingdojo.com"},
//     {name: "Brendan", email: "brendan@codingdojo.com"},
//     {name: "Andrew", email: "andrew@codingdojo.com"}
//   ];
//   response.render('users', {users: users_array});
// })
//
// app.get('/', function(req, res) {
//   res.render('index', {title: "my Express project"});
// });
// //
// // app.post('/users', function(req, res) {
// //   res.redirect('/');
// // })
//
// app.post('/users', function(req, res) {
//   console.log("POST DATA \n\n", req.body);
//   req.session.name = req.body.name;
//   console.log(req.session.name);
//   res.redirect('/');
// });
//
// app.get('/users/:id', function(req, res) {
//   console.log("The user id requested is:", req.params.id);
//   res.send('You requested the user with id:', req.params.id);
// });


app.listen(8000, function() {
  console.log("listening on port 8000");
})

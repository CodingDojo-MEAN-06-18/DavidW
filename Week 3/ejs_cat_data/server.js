var express = require("express");
var app = express();
app.get('/', function(request, response) {
   response.send("<h2>Please Proceed to route index.html</h2>");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
    // hard-coded user data
    var cars_array = [
        {name: "bmw", img_source: "/images/bmw.jpeg"}, 
        {name: "range", img_source: "/images/range.jpeg"}, 
        {name: "tesla", img_source: "/images/tesla.jpeg"}, 
        {name: "honda", img_source: "/images/honda.jpeg"}, 
    ];
    response.render('cars', {cars: cars_array});
})

app.get("/form", function (request, response){
  // hard-coded user data
  response.render('form');
})

app.get("/cats", function (request, response){
  // hard-coded user data
  var cats_array = [
      {name: "white", img_source: "/images/white.jpeg"}, 
      {name: "orange", img_source: "/images/orange.jpeg"}, 
      {name: "kitten", img_source: "/images/kitten.jpeg"}, 
      {name: "grey", img_source: "/images/grey.jpeg"}, 
  ];
  response.render('cats', {cats: cats_array});
})

app.get("/cats/white", function (request, response){
  // hard-coded user data
  var white_array = [
    {detail: "white"}, 
    {detail: "green eyes"}, 
    {detail: "grey mixed in"}, 
    {detail: "likes to lay down alot"}, 
];
  response.render('details', {detail: white_array});
})
app.get("/cats/grey", function (request, response){
  // hard-coded user data
  var grey_array = [
    {detail: "grey"}, 
    {detail: "purple collar"}, 
    {detail: "im sitting"}, 
    {detail: "guess what im looking at?"}, 
];
  response.render('details', {detail: grey_array});
})
app.get("/cats/kitten", function (request, response){
  // hard-coded user data
  var kitten_array = [
    {detail: "kitten"}, 
    {detail: "blue eyes"}, 
    {detail: "white mixed in"}, 
    {detail: "arent i cute?"}, 
];
  response.render('details', {detail: kitten_array});
})
app.get("/cats/orange", function (request, response){
  // hard-coded user data
  var orange_array = [
    {detail: "orange"}, 
    {detail: "am i eating a candy cane?"}, 
    {detail: "white mixed in"}, 
    {detail: "likes to lay down alot"}, 
];
  response.render('details', {detail: orange_array});
})

app.get("/cars/bmw", function (request, response){
  // hard-coded user data
  response.render('details');
})
app.get("/cars/honda", function (request, response){
  // hard-coded user data
  response.render('details');
})
app.get("/cars/tesla", function (request, response){
  // hard-coded user data
  response.render('details');
})
app.get("/cars/range", function (request, response){
  // hard-coded user data
  response.render('details');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
});
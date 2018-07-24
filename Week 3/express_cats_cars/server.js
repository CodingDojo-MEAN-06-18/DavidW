var express = require("express");
var app = express();
app.get('/', function(request, response) {
   response.send("<h1>Welcome to the Cat Assignment</h1>");
   response.send("<h2>Please Proceed to route index.html</h2>");
})

app.use(express.static(__dirname + "/static"));


app.listen(8000, function() {
  console.log("listening on port 8000");
});
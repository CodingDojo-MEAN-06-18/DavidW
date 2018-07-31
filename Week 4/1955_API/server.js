/* Im working on getting back all my information i have spoken with nick some but basically i wasnt using 
.gitignore so git stopped taking my commits.... i couldnt figure out what was going on and did a ton 
of research but finally asked nick. he helped explain it but then after adding the gitignore i tried to revert
back to re upload all my saved data and just reverted back like a weeks worth a work and ive been digging
through old assignments i sent on coding dojo and in my trash to try and get stuff back. i need to move on to
angular so this is the 1955 solutions and i tried to add comments to everything showing i understand 
everything. hopefully i can recover everything i will work more on it in my free time and try to get
other things re submitted. as of now my github is still messed up but i will be working with the TAs or 
even you jason to fix this sometime this week. ill do my best in my free time to fix all this but for 
now i felt i shouuld move to angular and the next section since im already behind. my number is 206 604 5592
if you want to call me also or i can zoom anytime
*/

// Basic modules needed for the assignemnt and other varibales to trun them and the server
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

// turns body-parser on and communicating in JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static( __dirname + './public/src/index' ));
// app.use(express.static( __dirname + './public/dist/public/index' ));

// requires all the information 
require('./server/config/database');

// using the invoked app variable and the exporting functions and data to run the server routes
require('./server/config/routes')(app);

// logs the port message when the app connects to the port
app.listen(port, () => console.log(`Express server listening on port ${ port }`));
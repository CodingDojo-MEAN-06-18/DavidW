const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
    response.sendFile(path.resolve('dist/TeamManager/index.html')) 
    //angular 6 will have  the project name otherwise dist/index.html
})  

module.exports = router;
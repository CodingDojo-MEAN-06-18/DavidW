const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
    response.sendFile(path.resolve('dist/BicycleMarketplace/index.html')) //angular 6 will have  the project name otherwise dist/index.html
    // response.sendFile(path.join(__dirname, '../../dist/index.html'))
})
// handles server aspect if its not found on server then if its still not found will load in angular
module.exports = router;
const User = require('mongoose').model('User');
const path = require('path');

module.exports = {
    // this will get a user by their id sent from the service and in the url params
    index(request, response) {
        User.findById(request.params.user_id)
        .then(data => {
            response.json(data)
        })
        .catch(error => response.json(error));
    },
    // this will log our user in if we find a user with a matching email and match their password which is encrypted 
    login(request, response) {
        const { email, password } = request.body;
        User.findOne({ email })
        .then(user => {
            if (!user) throw new Error();
            return User.validatePassword(password, user.password).then(valid => {
                if (!valid) throw new Error();
                completeLogin(request, response, user);
            });
        })
        .catch(error => {
            response.status(401).json('User/password combo not found');
        });
    },
    // registers our new user
    register(request, response) {
        User.create(request.body)
        .then(user => {
            completeLogin(request, response, user);
        })
        .catch(console.log);
    },
    // clears session and cookies of user 
    logout(request, response) {
        request.session.destroy();
        response.clearCookie('userID');
        response.clearCookie('expiration');
        response.json(true);
        },
    };

// function to use during login that stores session, deletes the cookie password 
// if stored and adds some cookies for us to use in the program
function completeLogin(request, response, user) {
    request.session.user = user.toObject();
    delete request.session.user.password;
    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);
    response.json(user);
}




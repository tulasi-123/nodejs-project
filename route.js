const express = require('express');

const route = express.Router();
const validate = require('./validateDTO');
const dev = require('./devValidation');
const postController = require('./controllers/routeController');

const getController = require('./controllers/getController');

const updateController = require('./controllers/updateController');

const deleteController = require('./controllers/deleteController');

route.get('/getDetails', function (req, res) {
    res.send('Welcome to Node JS.');
});

// to clean up the code purpose using routeController

route.post('/addEmployee', validate(dev), postController);

route.get('/getEmployees', getController);

route.put('/updateEmployees', updateController);

route.delete('/deleteEmployees', deleteController);

module.exports = route;
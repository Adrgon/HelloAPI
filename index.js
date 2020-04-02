/*
 The index file
*/

//Dependencies
var server = require('./server');

//Declare the app
var app = {};

//Initialize the app
app.init = ()=>{
	server.init();
};

//Execute 
app.init();

//Export the app
module.exports = app;
/*
Request handlers
*/

//Define handler container
var handlers = {};

// Define the hello handler
handlers.hello = (data, callback)=>{

	// Set the greeting, the default
	var greeting = 'Puto el que lee';

	callback(200, {'message': greeting + '!'});
};

// Define the default handler
handlers.default = (data, callback)=>{
	callback(404,{'message' : 'Please send a request to /hello to receive a message. '});
};

//Export the module
module.exports = handlers;

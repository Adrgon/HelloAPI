/*
* Main server file
*/

// Dependencies
const http = require('http');

const url = require('url');

const config = require('./config');
const handlers = require('./handlers');

// Instantiate the server module object
var server = {};

// Instantiate the HTTP server
server.httpServer = http.createServer((req,res)=> {
		server.unifiedServer(req, res)
	});


// All the server logic server
server.unifiedServer = (req, res)=>{

		const 	parsedUrl = url.parse(req.url, true);
		var	path = parsedUrl.pathname;
		const 	trimmedPath = path.replace(/^\/+|\/+$/g,'');
		
		//Get HTTP method
		var method = req.method.toLowerCase();

		var chosenHandler = typeof(server.router[trimmedPath]) !== 'undefined' ? server.router[trimmedPath] : handlers.default;

		//Construct the data object to send to the handler
		var data = 
		{
			'trimmedPath' : trimmedPath,
			'method' : method			
		};

		//Route the request to the handler specified in the router
		chosenHandler(data, (statusCode, payload)=> {
			//Use the status code called back by the handler, or default to 200
			statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
			payload = typeof(payload) == 'object' ? payload : {};

			//Convert payload to a string
			var payloadString = JSON.stringify(payload);
				
			//Return the response
			res.setHeader('Content-Type','application/json');
			res.writeHead(statusCode);
			res.end(payloadString);
		});	
};

server.router = {
	'default' : handlers.default,
	'hello' : handlers.hello
};

server.init = ()=>{

	//Start the HTTP server
	server.httpServer.listen(config.httpPort, ()=> {
		console.log('The HTTP server is listening on port ' + config.httpPort + ' in ' + config.envName + '.');
	});
};

module.exports = server;
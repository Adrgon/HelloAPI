/* 
Config file
*/

//Environments
var environments = {};

// Staging (default) environment
environments.staging = {
	'httpPort' : 3000,
	'envName' : 'staging'
};

// Production environment
environments.production = {
	'httpPort' : 5000,
	'envName' : 'production'
};

/* Determine if production environment was passed as a command line arg, otherwise set to staging.
In Windows, the arguments are kept in process.argv array */

var environmentToExport;

if (process.platform === "win32")
{
	if (process.argv.length > 2)
		environmentToExport = process.argv.indexOf(environments.production.envName.toLowerCase()) > -1 ? environments.production : environments.staging;
	else 
		environmentToExport = environments.staging;
}
else
{
	var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
	environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
}

// Export the module
module.exports = environmentToExport;
var colors = require('colors');
 
console.log('hello'.green);

const SimpleNodeLogger = require('simple-node-logger'),
	opts = {
		logFilePath:'mylogfile.log',
		timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
	},
log = SimpleNodeLogger.createSimpleLogger( opts );
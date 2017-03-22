var fs = require('fs');

fs.readFile('index.html', 'utf-8', function(err, data){
	console.log(data);
});

console.log('Hello from end of the file');

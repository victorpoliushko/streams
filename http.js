const {createServer} = require('http');
const {createReadStream} = require('fs');
const fileName = './testFile.png';

createServer((req, res) => {

}).listen(3000, () => console.log('server is running on port 3000'));

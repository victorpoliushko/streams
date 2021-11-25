const fs = require('fs');

const readStream = fs.createReadStream('./scr.png');

readStream.on('data', (chunk) => {
  console.log(chunk);
  console.log('chunk size', chunk.length);
});

readStream.on('end', (chunk) => {
  console.log('end of the stream');
});

readStream.on('error', (err) => {
  console.log('error occured');
  console.log(err);
});
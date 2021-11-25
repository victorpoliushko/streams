const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./testFile.png');
const writeStream = createWriteStream('./copy.png');

readStream.on('data', chunk => {
  writeStream.write(chunk);
});

readStream.on('error', err => {
  console.log('An error has occured');
  console.log(err);
});

readStream.on('end', () => {
  writeStream.end();
});

writeStream.on('close', () => {
  process.stdout.write('file copied \n');
});

const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./testFile.png');
const writeStream = createWriteStream('./text.txt');

// readStream.pipe(writeStream).on('error', console.error);

process.stdin.pipe(writeStream);
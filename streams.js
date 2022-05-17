const fs = require('fs');
const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writestream = fs.createWriteStream('./docs/blog4.txt');

// the hard way:
//readstream.on('data', (chunk) => {
//    console.log("--------- New Chunk: ");
//    console.log(chunk);
//    writestream.write('\nNew Chunk\n');
//    writestream.write(chunk);
//})

// the pipe way:
readstream.pipe(writestream);
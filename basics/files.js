const fs = require('fs');

// read files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log('error');
    }
    console.log(data.toString());
});

// write files

fs.writeFile('./docs/blog1.txt', 'hello world!', () => {
    console.log('file was written');
});

// create and remove directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log('file deleted');
        }
    })
} else {
    fs.writeFile('./docs/deleteme.txt', 'delete me!', () => {
        console.log('file created')
    })
}
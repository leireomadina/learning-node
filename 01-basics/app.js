const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log('node native argv: ', process.argv);
// console.log('yargs package argv: ', argv);

createFile(argv.b, argv.l, argv.p)
	.then((fileName) => console.log(fileName.green, ' created'))
	.catch((err) => console.log(err.red));

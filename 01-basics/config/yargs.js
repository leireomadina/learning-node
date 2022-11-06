const yargs = require('yargs/yargs');
// hideBin is a shorthand for process.argv.slice(2)
const { hideBin } = require('yargs/helpers');
const { argv } = yargs(hideBin(process.argv))
	.options({
		b: {
			alias: 'base',
			type: 'number',
			demandOption: true,
			describe: 'Multiply table number',
		},
		l: {
			alias: 'limit',
			type: 'number',
			describe: 'Multiply table limit',
			default: 10,
		},
		p: {
			alias: 'print',
			type: 'boolean',
			demandOption: false,
			describe: 'Prints the table in console',
			default: false,
		},
	})
	.check((argv, options) => {
		console.log('yargs', argv);
		if (isNaN(argv.b)) {
			throw 'Base has to be a number.';
		} else if (isNaN(argv.l)) {
			throw 'Limit has to be a number.';
		} else {
			return true;
		}
	});

module.exports = argv;

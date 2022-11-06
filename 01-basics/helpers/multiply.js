const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, limit = 10, print = false) => {
	try {
		let data = '';

		for (let i = 1; i <= limit; i++) {
			data += `${base} x ${i} = ${base * i}\n`;
		}

		if (print === true) {
			console.log('============'.green);
			console.log('Table ', base);
			console.log('============'.green);
			console.log(data);
		}

		fs.writeFileSync(`./output/table-${base}.txt`, data);
		const fileName = `table-${base}.txt`;
		return fileName;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createFile,
};

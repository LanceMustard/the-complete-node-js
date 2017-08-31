// third party packages
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
// custom package
const notes = require('./notes.js');

//const user = os.userInfo();
//notes.writeLine('dev.log', `Executed by ${user.username}`);

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
	if (notes.addNote(argv.title, argv.body)) {
		console.log('Note added successfully');
	} else {
		console.log('Adding note failed');
	};
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.readNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command note recognised');
}

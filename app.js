// third party packages
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
// custom package
const notes = require('./notes.js');

//const user = os.userInfo();
//notes.writeLine('dev.log', `Executed by ${user.username}`);

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const argv = yargs
						.command('add', 'Add a new note', {
							title: titleOptions,
							body: {
								describe: 'Body of note',
								demand: true,
								alias: 'b'
							}
						})
						.command('list', 'List all notes', {})
						.command('read', 'Read an existing note', {
							title: titleOptions
						})
						.command('remove', 'Remove an existing note', {
							title: titleOptions
						})
						.help()
						.argv;
const command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body); 
	if (note) {
		console.log('Note added successfully');
		notes.logNote(note);
	} else {
		console.log('Adding note failed');
	};
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} notes`);
	allNotes.forEach((note) => { 
		notes.logNote(note); 
	});
} else if (command === 'read') {
	var note = notes.readNote(argv.title);
	if (note) {
		console.log('Note found...');
		notes.logNote(note);
	} else {
		console.log('Could not find note');
	};
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command note recognised');
}

// third party packages
const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch (e) {
		return [];
	}
}

var saveNotes = (notes) => {
	var noteString = fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	}
	var duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	console.log('getAll');
};

var readNote = (title) => {
	console.log('readNote: ', title);
};

var removeNote = (title) => {
	console.log('removeNote: ', title);
};

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};

/*
exports.write = (file, message) => {
  fs.appendFile(file, message, (err) => {
    if (err) throw err;
  });
}

exports.writeLine = (file, message) => {
  fs.appendFile(file, message + '\n', (err) => {
    if (err) throw err;
  });
}
*/
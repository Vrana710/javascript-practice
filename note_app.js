const fs = require('fs');
const readline = require('readline-sync');

const NOTES_FILE = 'notes.json';

// Helper function to load notes from the JSON file
function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync(NOTES_FILE, 'utf8');
        return JSON.parse(dataBuffer);
    } catch (e) {
        return []; // If file doesn't exist or is empty, return an empty array
    }
}

// Helper function to save notes to the JSON file
function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes, null, 2);
    fs.writeFileSync(NOTES_FILE, dataJSON, 'utf8');
}

// Main menu function
function mainMenu() {
    let choice;
    do {
        console.log("\n--- Note Organizer Menu ---");
        console.log("1. Add a note");
        console.log("2. List all notes");
        console.log("3. Read a note");
        console.log("4. Delete a note");
        console.log("5. Update a note");
        console.log("6. Exit");
        choice = readline.question("Enter your choice: ");
        switch (choice) {
            case '1':
                addNote();
                break;
            case '2':
                listNotes();
                break;
            case '3':
                readNote();
                break;
            case '4':
                deleteNote();
                break;
            case '5':
                updateNote();
                break;
            case '6':
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice, please select a valid option.");
        }
    } while (choice !== '6');
}

// Part 1: Add a Note
function addNote() {
    const title = readline.question("Enter note title: ");
    const body = readline.question("Enter note body: ");
    const notes = loadNotes();

    const duplicateNote = notes.find(note => note.title === title);
    if (duplicateNote) {
        console.log("A note with this title already exists. Please use a different title.");
        return;
    }

    const newNote = {
        title,
        body,
        time_added: new Date().toISOString()
    };
    notes.push(newNote);
    saveNotes(notes);
    console.log("Note added successfully!");
}

// Part 2: List All Notes
function listNotes() {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log("No notes found.");
        return;
    }

    notes.forEach((note, index) => {
        console.log(`${index + 1}. Title: ${note.title}`);
        console.log(`   Body: ${note.body}`);
        console.log(`   Added on: ${note.time_added}\n`);
    });
}

// Part 3: Read a Note
function readNote() {
    const title = readline.question("Enter note title: ");
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (!note) {
        console.log(`Note with title "${title}" not found.`);
        return;
    }

    console.log(`\nTitle: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log(`Added on: ${note.time_added}`);
}

// Part 4: Delete a Note
function deleteNote() {
    const title = readline.question("Enter note title: ");
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);

    if (notes.length === filteredNotes.length) {
        console.log(`Note with title "${title}" not found.`);
        return;
    }

    saveNotes(filteredNotes);
    console.log(`Note with title "${title}" deleted successfully!`);
}

// Part 5: Update a Note
function updateNote() {
    const title = readline.question("Enter note title: ");
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title === title);

    if (noteIndex === -1) {
        console.log(`Note with title "${title}" not found.`);
        return;
    }

    const newBody = readline.question("Enter new note body: ");
    notes[noteIndex].body = newBody;
    saveNotes(notes);
    console.log(`Note with title "${title}" updated successfully!`);
}

// Start the application
mainMenu();

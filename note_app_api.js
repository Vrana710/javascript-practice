const express = require('express');
const fs = require('fs');
const app = express();

// File path for storing notes
const NOTES_FILE = 'notes.json';

// Middleware to parse JSON request bodies
app.use(express.json());

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

// GET /notes - Returns a list of all notes
app.get('/notes', (req, res) => {
    const notes = loadNotes();
    res.json(notes);
});

// POST /notes - Adds a new note
app.post('/notes', (req, res) => {
    const { title, body } = req.body;
    const notes = loadNotes();

    const duplicateNote = notes.find(note => note.title === title);
    if (duplicateNote) {
        return res.status(400).json({ error: 'Note title already exists' });
    }

    const newNote = {
        title,
        body,
        time_added: new Date().toISOString()
    };
    notes.push(newNote);
    saveNotes(notes);
    res.status(201).json(newNote);
});

// GET /notes/:title - Returns the note with the given title
app.get('/notes/:title', (req, res) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === req.params.title);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }

    res.json(note);
});

// DELETE /notes/:title - Deletes the note with the given title
app.delete('/notes/:title', (req, res) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== req.params.title);

    if (notes.length === filteredNotes.length) {
        return res.status(404).json({ error: 'Note not found' });
    }

    saveNotes(filteredNotes);
    res.status(200).json({ message: 'Note deleted successfully' });
});

// PUT /notes/:title - Updates the note with the given title
app.put('/notes/:title', (req, res) => {
    const { body } = req.body;
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title === req.params.title);

    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }

    notes[noteIndex].body = body;
    saveNotes(notes);
    res.status(200).json(notes[noteIndex]);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Note Organizer API is listening on port ${PORT}!`);
});

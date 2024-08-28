# Note Organizer App and Exercises

## Clone the repository:
   ```sh
   git clone https://github.com/Vrana710/javascript-practice.git
   ```
## Navigate into the project directory:
   ```sh
   cd javascript-practice
   ```

## Table of Contents

1. [Exercise 1: Command Line Input](#exercise-1-command-line-input)
2. [Exercise 2: Working with Objects](#exercise-2-working-with-objects)
3. [Exercise 3: Working with Arrays](#exercise-3-working-with-arrays)
4. [Exercise 4: Working with JSON](#exercise-4-working-with-json)
5. [Final Exercise: Note Organizer App](#final-exercise-note-organizer-app)
6. [Bonus: Note Organizer API](#bonus-note-organizer-api)

## Exercise 1: Command Line Input

### Description

This exercise demonstrates how to get user input from the command line using the `readline-sync` package in Node.js. The program asks the user for their favorite color and fruit, then displays the inputs back to the user.

### Running the Code

1. Install `readline-sync` package if not already installed:
   ```bash
   npm install readline-sync
   ```

2. Run the program:
   ```bash
   node exercise1.js
   ```

### Code Example

```javascript
const readline = require('readline-sync');

const color = readline.question('What is your favorite color? ');
const fruit = readline.question('What is your favorite fruit? ');

console.log(`Your favorite color is ${color} and your favorite fruit is ${fruit}.`);
```

## Exercise 2: Working with Objects

### Description

This exercise involves creating and manipulating a JavaScript object. The program creates a `student` object, updates its properties, and displays information about the student.

### Running the Code

Run the program:
```bash
node exercise2.js
```

### Code Example

```javascript
let student = {
    name: 'John Doe',
    age: 16,
    subjects: ['Math', 'English', 'Science'],
    grades: {
        Math: 'A',
        English: 'B',
        Science: 'A'
    }
};

console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);
console.log('Subjects:', student.subjects);
console.log('Grades:', student.grades);

student.grades.English = 'A+';
console.log('Updated English Grade:', student.grades.English);

student.grades.History = 'B';
student.subjects.push('History');
console.log('Updated Grades:', student.grades);
```

## Exercise 3: Working with Arrays

### Description

This exercise covers creating and manipulating arrays in JavaScript. The program includes functions to calculate the average, find the maximum and minimum values, remove specific elements, and filter even numbers from an array.

### Running the Code

Run the program:
```bash
node exercise3.js
```

### Code Example

```javascript
let numbers = [12, 34, 56, 78, 91, 10, 23, 45];

function calculateAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

function removeValue(arr, value) {
    return arr.filter(num => num !== value);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log('Average:', calculateAverage(numbers));
console.log('Min and Max:', findMinMax(numbers));
console.log('Array without 56:', removeValue(numbers, 56));
console.log('Even Numbers:', filterEvenNumbers(numbers));
```

## Exercise 4: Working with JSON

### Description

This exercise demonstrates how to read and write JSON files in Node.js. The program creates a book object, saves it to a JSON file, reads the file, prints the contents, updates the book's properties, and writes the updated object back to the JSON file.

### Running the Code

Run the program:
```bash
node exercise4.js
```

### Code Example

```javascript
const fs = require('fs');

let book = {
    title: 'JavaScript for Beginners',
    author: 'John Doe',
    year: 2023
};

let bookJSON = JSON.stringify(book, null, 2);
fs.writeFileSync('book.json', bookJSON);

let data = fs.readFileSync('book.json', 'utf8');
let parsedBook = JSON.parse(data);
console.log('Title:', parsedBook.title);
console.log('Author:', parsedBook.author);

parsedBook.year = 2024;
bookJSON = JSON.stringify(parsedBook, null, 2);
fs.writeFileSync('book.json', bookJSON);
```

## Final Exercise: Note Organizer App

### Description

This is a command-line application to organize notes. Users can add, list, read, delete, and update notes. The notes are stored in a JSON file, ensuring persistence between runs.

### Running the Code

Run the program:
```bash
node note_app.js
```

### Code Example

```javascript
const fs = require('fs');
const readline = require('readline-sync');

const NOTES_FILE = 'notes.json';

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync(NOTES_FILE, 'utf8');
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes, null, 2);
    fs.writeFileSync(NOTES_FILE, dataJSON, 'utf8');
}

// Application logic for adding, listing, reading, deleting, and updating notes
```

### User Interface Options

1. Add a note
2. List all notes
3. Read a note
4. Delete a note
5. Update a note
6. Exit

## Bonus: Note Organizer API

### Description

This bonus exercise transforms the Note Organizer App into a RESTful API using Express.js. The API supports creating, reading, updating, and deleting notes via HTTP requests.

### Running the API

1. Install `express` package if not already installed:
   ```bash
   npm install express
   ```

2. Run the API:
   ```bash
   node note_app_api.js
   ```

3. The API listens on port `3000` by default.

### Endpoints

- **GET /notes**: Returns a list of all notes.
- **POST /notes**: Adds a new note.
- **GET /notes/:title**: Returns the note with the given title.
- **DELETE /notes/:title**: Deletes the note with the given title.
- **PUT /notes/:title**: Updates the note with the given title.

### Code Example

```javascript
const express = require('express');
const fs = require('fs');
const app = express();

const NOTES_FILE = 'notes.json';

app.use(express.json());

// Route definitions and logic
```

### Testing the API

Use tools like Postman or cURL to interact with the API.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to open issues or submit pull requests. All contributions are welcome!

## Contact

For any questions or suggestions, please reach out to [ranavarsha710@gmail.com](mailto:ranavarsha710@gmail.com).

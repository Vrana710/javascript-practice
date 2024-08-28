let fs = require('fs');

// Part 1: Create and Save a JSON File
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2023
};
let bookJSON = JSON.stringify(book, null, 2);
fs.writeFileSync('book.json', bookJSON, 'utf8');
console.log("JSON file 'book.json' has been created and saved.");

// Part 2: Read a JSON File
let data = fs.readFileSync('book.json', 'utf8');
let bookObject = JSON.parse(data);
console.log("JSON file 'book.json' has been read and parsed.");

// Part 3: Print to the Console
console.log(`Title: ${bookObject.title}`);
console.log(`Author: ${bookObject.author}`);

// Part 4: Update a JSON File
bookObject.year = 2024;
let updatedBookJSON = JSON.stringify(bookObject, null, 2);
fs.writeFileSync('book.json', updatedBookJSON, 'utf8');
console.log("The year property has been updated and saved back to 'book.json'.");

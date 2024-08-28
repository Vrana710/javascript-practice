// Creating the student object with properties: name, age, subjects, and grades
let student = {
    name: 'Alice',
    age: 17,
    subjects: ['Math', 'English', 'Science'],
    grades: {
        Math: 'A',
        English: 'B',
        Science: 'A'
    }
};

// Printing out the student's name and age
console.log(`Student's Name: ${student.name}`);
console.log(`Student's Age: ${student.age}`);

// Printing out the list of subjects that the student is taking
console.log('Subjects:', student.subjects.join(', '));

// Printing out the student's grade in each subject
console.log('Grades:');
for (let subject of student.subjects) {
    console.log(`${subject}: ${student.grades[subject]}`);
}

// Changing the student's grade in one of the subjects
student.grades.Math = 'A+';
console.log(`\nUpdated Grade in Math: ${student.grades.Math}`);

// Adding a new subject and corresponding grade
student.subjects.push('History');
student.grades.History = 'B+';
console.log('\nUpdated Grades with New Subject:');
for (let subject in student.grades) {
    console.log(`${subject}: ${student.grades[subject]}`);
}

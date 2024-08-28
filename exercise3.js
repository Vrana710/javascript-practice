// Create an array of random integers
let numbers = [10, 15, 23, 42, 8, 4, 33, 56];

// Function to calculate the average of elements in the array
function calculateAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Function to find the maximum and minimum values in the array
function findMinMax(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}

// Function to remove a specific value from the array
function removeValue(arr, value) {
    return arr.filter(num => num !== value);
}

// Function to filter the array to include only even numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Testing the functions
console.log("Original Array:", numbers);

let average = calculateAverage(numbers);
console.log("Average of the array elements:", average);

let { max, min } = findMinMax(numbers);
console.log(`Maximum value: ${max}, Minimum value: ${min}`);

let valueToRemove = 23;
let arrayAfterRemoval = removeValue(numbers, valueToRemove);
console.log(`Array after removing ${valueToRemove}:`, arrayAfterRemoval);

let evenNumbers = filterEvenNumbers(numbers);
console.log("Array with even numbers only:", evenNumbers);

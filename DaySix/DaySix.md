# Array Manipulation and Iteration in JavaScript

This README provides code snippets for various array manipulation and iteration tasks in JavaScript. Each activity is broken down into specific tasks with corresponding code examples.

## Activity 1: Array Creation and Access

### Task 1
Create an array of numbers from 1 to 5 and log the array to the console.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
```

### Task 2
Access the first and last elements of the array and log them to the console.

```javascript
const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
console.log('First Element:', firstElement);
console.log('Last Element:', lastElement);
```

## Activity 2: Array Methods (Basic)

### Task 3
Use the `push` method to add a new number to the end of the array and log the updated array.

```javascript
numbers.push(6);
console.log('After push:', numbers);
```

### Task 4
Use the `pop` method to remove the last element from the array and log the updated array.

```javascript
numbers.pop();
console.log('After pop:', numbers);
```

### Task 5
Use the `shift` method to remove the first element from the array and log the updated array.

```javascript
numbers.shift();
console.log('After shift:', numbers);
```

### Task 6
Use the `unshift` method to add a new number to the beginning of the array and log the updated array.

```javascript
numbers.unshift(0);
console.log('After unshift:', numbers);
```

## Activity 3: Array Methods (Intermediate)

### Task 7
Use the `map` method to create a new array where each number is doubled and log the new array.

```javascript
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);
```

### Task 8
Use the `filter` method to create a new array with only even numbers and log the new array.

```javascript
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);
```

### Task 9
Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

```javascript
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of Numbers:', sum);
```

## Activity 4: Array Iteration

### Task 10
Use a `for` loop to iterate over the array and log each element to the console.

```javascript
for (let i = 0; i < numbers.length; i++) {
  console.log('Element at index', i, ':', numbers[i]);
}
```

### Task 11
Use the `forEach` method to iterate over the array and log each element to the console.

```javascript
numbers.forEach((num, index) => {
  console.log('Element at index', index, ':', num);
});
```

## Activity 5: Multi-dimensional Arrays

### Task 12
Create a two-dimensional array (matrix) and log the entire array to the console.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Matrix:', matrix);
```

### Task 13
Access and log a specific element from the two-dimensional array.

```javascript
const specificElement = matrix[1][2]; // Accessing element at second row, third column
console.log('Specific Element:', specificElement);
```

## Feature Requests

### Array Manipulation Script
Write a script that demonstrates the creation of an array, adding and removing elements using `push`, `pop`, `shift`, and `unshift` methods.

```javascript
const arrayManipulation = () => {
  const arr = [1, 2, 3];
  console.log('Initial Array:', arr);

  arr.push(4);
  console.log('After push:', arr);

  arr.pop();
  console.log('After pop:', arr);

  arr.shift();
  console.log('After shift:', arr);

  arr.unshift(0);
  console.log('After unshift:', arr);
};

arrayManipulation();
```

### Array Transformation Script
Create a script that uses `map`, `filter`, and `reduce` methods to transform and aggregate array data.

```javascript
const arrayTransformation = () => {
  const arr = [1, 2, 3, 4, 5];

  const doubled = arr.map(num => num * 2);
  console.log('Doubled:', doubled);

  const evens = arr.filter(num => num % 2 === 0);
  console.log('Evens:', evens);

  const sum = arr.reduce((acc, num) => acc + num, 0);
  console.log('Sum:', sum);
};

arrayTransformation();
```

### Array Iteration Script
Write a script that iterates over an array using both `for` loop and `forEach` method and logs each element.

```javascript
const arrayIteration = () => {
  const arr = [1, 2, 3, 4, 5];

  console.log('Using for loop:');
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  console.log('Using forEach:');
  arr.forEach(num => console.log(num));
};

arrayIteration();
```

### Two-dimensional Array Script
Create a script that demonstrates the creation and manipulation of a two-dimensional array.

```javascript
const twoDimensionalArray = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log('Matrix:', matrix);

  const element = matrix[2][1]; // Accessing element at third row, second column
  console.log('Accessed Element:', element);

  matrix[0][0] = 10; // Modifying an element
  console.log('Modified Matrix:', matrix);
};

twoDimensionalArray();
```

This README provides a comprehensive guide to array manipulation and iteration in JavaScript, covering basic to intermediate methods and multi-dimensional arrays from task given by Hitesh Choudhary 

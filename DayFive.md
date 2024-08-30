# JavaScript Code Snippets

## Activity 1: Function Declaration

### Task 1
Write a function to check if a number is even or odd and log the result to the console.

```javascript
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// Example usage:
checkEvenOdd(4); // Output: 4 is even
checkEvenOdd(7); // Output: 7 is odd
```

### Task 2
Write a function to calculate the square of a number and return the result.

```javascript
function square(number) {
    return number * number;
}

// Example usage:
console.log(square(5)); // Output: 25
console.log(square(9)); // Output: 81
```

## Activity 2: Function Expression

### Task 3
Write a function expression to find the maximum of two numbers and log the result to the console.

```javascript
const findMax = function(a, b) {
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
};

// Example usage:
findMax(10, 20); // Output: The maximum of 10 and 20 is 20
findMax(30, 15); // Output: The maximum of 30 and 15 is 30
```

### Task 4
Write a function expression to concatenate two strings and return the result.

```javascript
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example usage:
console.log(concatenateStrings("Hello, ", "World!")); // Output: Hello, World!
console.log(concatenateStrings("Good ", "Morning")); // Output: Good Morning
```

## Activity 3: Arrow Functions

### Task 5
Write an arrow function to calculate the sum of two numbers and return the result.

```javascript
const sum = (a, b) => a + b;

// Example usage:
console.log(sum(5, 7)); // Output: 12
console.log(sum(10, 20)); // Output: 30
```

### Task 6
Write an arrow function to check if a string contains a specific character and return a boolean value.

```javascript
const containsCharacter = (str, char) => str.includes(char);

// Example usage:
console.log(containsCharacter("Hello", "e")); // Output: true
console.log(containsCharacter("World", "a")); // Output: false
```

## Activity 4: Function Parameters and Default Values

### Task 7
Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

```javascript
function multiply(a, b = 1) {
    return a * b;
}

// Example usage:
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(7));    // Output: 7
```

### Task 8
Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

```javascript
function greet(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage:
console.log(greet("Alice", 25)); // Output: Hello, Alice! You are 25 years old.
console.log(greet("Bob"));       // Output: Hello, Bob! You are 30 years old.
```

## Activity 5: Higher-Order Functions

### Task 9
Write a higher-order function that takes a function and a number, and calls the function that many times.

```javascript
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Example usage:
repeatFunction(() => console.log("Hello!"), 3);
// Output:
// Hello!
// Hello!
// Hello!
```

### Task 10
Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

```javascript
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

// Example usage:
const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;

console.log(applyFunctions(add5, multiplyBy2, 10)); // Output: 30
```

This README provides JavaScript code snippets for various tasks involving function declarations, function expressions, arrow functions, function parameters with default values, and higher-order functions. Each task is accompanied by example usage to demonstrate how the functions work.

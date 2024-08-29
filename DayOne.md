# JavaScript Basics - Variable Declaration, Constants, and Data Types

This README provides code snippets and explanations for fundamental JavaScript concepts, including variable declaration, constants, data types, reassigning variables, and understanding the behavior of `const`.

## Activity 1: Variable Declaration

### Task 1: Declare a variable using `var`
```javascript
var num = 10;
console.log(num); // Output: 10
```

In this task, we declare a variable `num` using `var` and assign it a numeric value. The value is then logged to the console.

### Task 2: Declare a variable using `let`
```javascript
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!
```

Here, we declare a variable `greeting` using `let` and assign it a string value. The value is then logged to the console.

## Activity 2: Constant Declaration

### Task 3: Declare a variable using `const`
```javascript
const isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true
```

In this task, a variable `isJavaScriptFun` is declared using `const` and assigned a boolean value. The value is logged to the console.

## Activity 3: Data Types

### Task 4: Create variables of different data types
```javascript
let num = 42;
let str = "JavaScript";
let isFun = true;
let person = { name: "John", age: 30 };
let colors = ["red", "green", "blue"];

console.log(typeof num);    // Output: number
console.log(typeof str);    // Output: string
console.log(typeof isFun);  // Output: boolean
console.log(typeof person); // Output: object
console.log(typeof colors); // Output: object (arrays are objects in JavaScript)
```

In this task, variables of different data types are created and their types are logged using the `typeof` operator.

## Activity 4: Reassigning Variables

### Task 5: Reassign a variable using `let`
```javascript
let message = "Hello";
console.log(message); // Output: Hello

message = "World!";
console.log(message); // Output: World!
```

This task demonstrates how a variable declared with `let` can be reassigned a new value.

## Activity 5: Understanding `const`

### Task 6: Reassigning a `const` variable
```javascript
const pi = 3.14;
pi = 3.14159; // This will throw an error: TypeError: Assignment to constant variable.
```

Here, we try to reassign a variable declared with `const`. This will result in an error because `const` variables cannot be reassigned after their initial declaration.

## Feature Requests

### Task 7: `let` vs `const` Reassignment
```javascript
let score = 100;
score = 150; // No error, `let` allows reassignment
console.log(score); // Output: 150

const maxScore = 200;
maxScore = 250; // Error: Assignment to constant variable.
```

In this script, we compare the behavior of `let` and `const` in terms of reassignment. The `let` variable can be reassigned, while attempting to reassign a `const` variable throws an error.

---

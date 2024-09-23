# JavaScript : Template Literals, Destructuring, Spread/Rest Operators, Default Parameters, and Enhanced Object Literals

This README provides code snippets for various JavaScript features including template literals, destructuring, spread/rest operators, default parameters, and enhanced object literals. 
## Activity 1: Template Literals

### Task 1
Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

```javascript
const name = 'John';
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```

### Task 2
Create a multi-line string using template literals and log it to the console.

```javascript
const multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);
```

## Activity 2: Destructuring

### Task 3
Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log('First:', first);
console.log('Second:', second);
```

### Task 4
Use object destructuring to extract the title and author from a book object and log them to the console.

```javascript
const book = {
  title: '1984',
  author: 'George Orwell',
  year: 1949
};
const { title, author } = book;
console.log('Title:', title);
console.log('Author:', author);
```

## Activity 3: Spread and Rest Operators

### Task 5
Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

```javascript
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);
```

### Task 6
Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

## Activity 4: Default Parameters

### Task 7
Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

```javascript
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5
```

## Activity 5: Enhanced Object Literals

### Task 8
Use enhanced object literals to create an object with methods and properties, and log the object to the console.

```javascript
const name = 'Alice';
const age = 25;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);
person.greet();
```

### Task 9
Create an object with computed property names based on variables and log the object to the console.

```javascript
const propName = 'dynamicProperty';
const obj = {
  [propName]: 'This is a dynamic property'
};

console.log(obj);
```

## Feature Requests

### 1. Template Literals Script
Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

```javascript
const templateLiteralsScript = () => {
  const name = 'Jane';
  const age = 28;
  const message = `My name is ${name} and I am ${age} years old.`;
  console.log(message);

  const multiLineString = `This is a string
  that spans across
  multiple lines.`;
  console.log(multiLineString);
};

templateLiteralsScript();
```

### 2. Destructuring Script
Create a script that uses array and object destructuring to extract values and log them.

```javascript
const destructuringScript = () => {
  const numbers = [10, 20, 30, 40, 50];
  const [first, second] = numbers;
  console.log('First:', first);
  console.log('Second:', second);

  const book = {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951
  };
  const { title, author } = book;
  console.log('Title:', title);
  console.log('Author:', author);
};

destructuringScript();
```

### 3. Spread and Rest Operators Script
Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

```javascript
const spreadAndRestScript = () => {
  const oldArray = ['a', 'b', 'c'];
  const newArray = [...oldArray, 'd', 'e', 'f'];
  console.log(newArray);

  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
};

spreadAndRestScript();
```

### 4. Default Parameters Script
Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

```javascript
const defaultParametersScript = () => {
  function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(7, 3)); // Output: 21
  console.log(multiply(7));    // Output: 7
};

defaultParametersScript();
```

### 5. Enhanced Object Literals Script
Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

```javascript
const enhancedObjectLiteralsScript = () => {
  const name = 'Bob';
  const age = 32;

  const person = {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };

  console.log(person);
  person.greet();

  const propName = 'dynamicKey';
  const obj = {
    [propName]: 'This is a dynamic value'
  };

  console.log(obj);
};

enhancedObjectLiteralsScript();
```

This README provides a comprehensive guide to using template literals, destructuring, spread/rest operators, default parameters, and enhanced object literals in JavaScript. Each feature is demonstrated with clear code examples and scripts.

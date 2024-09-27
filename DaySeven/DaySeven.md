# Object Manipulation and Iteration in JavaScript

This README provides code snippets for various object manipulation and iteration tasks in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Each activity is broken down into specific tasks with corresponding code examples.

## Activity 1: Object Creation and Access

### Task 1
Create an object representing a book with properties like title, author, and year, and log the object to the console.

```javascript
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960
};
console.log(book);
```

### Task 2
Access and log the title and author properties of the book object.

```javascript
console.log('Title:', book.title);
console.log('Author:', book.author);
```

## Activity 2: Object Methods

### Task 3
Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

```javascript
book.getDetails = function() {
  return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());
```

### Task 4
Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

```javascript
book.updateYear = function(newYear) {
  this.year = newYear;
};
book.updateYear(2020);
console.log(book);
```

## Activity 3: Nested Objects

### Task 5
Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

```javascript
const library = {
  name: 'City Library',
  books: [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
  ]
};
console.log(library);
```

### Task 6
Access and log the name of the library and the titles of all the books in the library.

```javascript
console.log('Library Name:', library.name);
library.books.forEach(book => {
  console.log('Book Title:', book.title);
});
```

## Activity 4: The `this` Keyword

### Task 7
Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

```javascript
book.getTitleAndYear = function() {
  return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());
```

## Activity 5: Object Iteration

### Task 8
Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.

```javascript
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}
```

### Task 9
Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

```javascript
console.log('Keys:', Object.keys(book));
console.log('Values:', Object.values(book));
```

## Feature Requests

### Book Object Script
Write a script that creates a book object, adds methods to it, and logs its properties and method results.

```javascript
const bookScript = () => {
  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    getDetails: function() {
      return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
      this.year = newYear;
    },
    getTitleAndYear: function() {
      return `${this.title} (${this.year})`;
    }
  };

  console.log(book);
  console.log(book.getDetails());
  book.updateYear(2021);
  console.log(book);
  console.log(book.getTitleAndYear());
};

bookScript();
```

### Library Object Script
Create a script that defines a library object containing an array of book objects and logs the library's details.

```javascript
const libraryScript = () => {
  const library = {
    name: 'Downtown Library',
    books: [
      { title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
      { title: 'The Odyssey', author: 'Homer', year: -800 }
    ]
  };

  console.log(library);
  console.log('Library Name:', library.name);
  library.books.forEach(book => {
    console.log('Book Title:', book.title);
  });
};

libraryScript();
```

### Object Iteration Script
Write a script that demonstrates iterating over an object's properties using `for...in` loop and `Object.keys`/`Object.values`.

```javascript
const objectIterationScript = () => {
  const book = {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813
  };

  console.log('Using for...in loop:');
  for (let key in book) {
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
  }

  console.log('Using Object.keys and Object.values:');
  console.log('Keys:', Object.keys(book));
  console.log('Values:', Object.values(book));
};

objectIterationScript();
```

This README provides a comprehensive guide to object manipulation and iteration in JavaScript, covering basic to intermediate methods and nested objects.

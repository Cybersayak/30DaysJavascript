# **JavaScript Conditional Statements**

This repository contains JavaScript code examples demonstrating various conditional statements:

#### **Activity 1: If-Else Statements**

**Task 1: Checking Number Positivity**
```javascript
let number = 10;

if (number > 0) {
  console.log("Number is positive.");
} else if (number < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}
```

**Task 2: Checking Voting Eligibility**
```javascript
let age = 25;

if (age >= 18) {
  console.log("Eligible to vote.");
} else {
  console.log("Not eligible to vote.");
}
```

#### **Activity 2: Nested If-Else Statements**

**Task 3: Finding the Largest Number**
```javascript
let num1 = 10;
let num2 = 20;
let num3 = 15;

if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest.");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest.");
} else {
  console.log(num3 + " is the largest.");
}
```

#### **Activity 3: Switch Case**

**Task 4: Determining Day of the Week**
```javascript
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  // ... other cases
  default:
    console.log("Invalid day number");
}
```

**Task 5: Assigning a Grade**
```javascript
let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  // ... other cases
  default:
    console.log("Grade: F");
}
```

#### **Activity 4: Conditional (Ternary) Operator**

**Task 6: Checking Even or Odd**
```javascript
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);
```

#### **Activity 5: Combining Conditions**

**Task 7: Checking Leap Year**
```javascript
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
```

**Note:** Replace the placeholder values with your desired inputs to see the results.

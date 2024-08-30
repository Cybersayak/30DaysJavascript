# **JavaScript Loops**

This repository contains JavaScript code examples demonstrating various loop structures:

### **Activity 1: For Loop**

**Task 1: Printing Numbers from 1 to 10**
```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Task 2: Printing Multiplication Table of 5**
```javascript
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
```

### **Activity 2: While Loop**

**Task 3: Calculating Sum of Numbers from 1 to 10**
```javascript
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("Sum: " + sum);
```

**Task 4: Printing Numbers from 10 to 1**
```javascript
let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}
```

### **Activity 3: Do While Loop**

**Task 5: Write a program to print numbers from 1 to 5 using a do...while loop**
```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

**Task 6: Write a program to calculate the factorial of a number using a do...while loop**
```javascript
let number = 5;
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= number);

console.log("Factorial of " + number + ": " + factorial);
```

### **Activity 4: Nested Loops**

**Task 7: Write a program to print a pattern using nested for loops**
```
    *
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *
```

```javascript
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log();
}
```



### **Activity 5: Loop Control Statements**

**Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement**
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

**Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.**
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
```

**Note:** Replace the placeholder values with your desired inputs to see the results.

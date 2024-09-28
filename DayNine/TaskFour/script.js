// Select the ul element by its ID
const ulElement = document.getElementById('myList');

// Create a new li element
const newLi = document.createElement('li');

// Add text to the new li element
newLi.textContent = 'New Item';

// Append the new li element to the ul element
ulElement.appendChild(newLi);

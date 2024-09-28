// Using remove() method

// Select the element you want to remove
const itemToRemove = document.getElementById('item2');

// Remove the selected element
itemToRemove.remove();




//Using removeChild() method

// Select the parent element
const ulElement = document.getElementById('myList');

// Select the child element you want to remove
const itemRemove = document.getElementById('item4');

// Remove the child element using the parent
ulElement.removeChild(itemRemove);


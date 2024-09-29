// Select the parent element (ul in this case)
const ulElement = document.getElementById('myList');

// Check if the ul has any children before trying to remove
if (ulElement.lastElementChild) {
    // Remove the last child element
    ulElement.removeChild(ulElement.lastElementChild);
}


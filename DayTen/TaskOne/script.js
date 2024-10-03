// Get references to the button and paragraph
const button = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('myParagraph');

// Add event listener to the button
button.addEventListener('click', function() {
    // Change the text content of the paragraph
    paragraph.textContent = 'The text has been changed!';
});

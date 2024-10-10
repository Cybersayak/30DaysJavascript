// Select the div element
const colorBox = document.getElementById('colorBox');

// Add a mouseover event listener
colorBox.addEventListener('mouseover', function() {
    // Change background color when mouse hovers over the element
    colorBox.style.backgroundColor = 'lightblue';
});

// Optionally, add a mouseout event listener to revert the color when the mouse leaves
colorBox.addEventListener('mouseout', function() {
    // Reset background color when the mouse leaves the element
    colorBox.style.backgroundColor = 'lightgray';
});

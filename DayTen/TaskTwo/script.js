// Select the image element
const image = document.getElementById('toggleImage');

// Add a double-click event listener
image.addEventListener('dblclick', function() {
    // Toggle the 'hidden' class
    image.classList.toggle('hidden');
});

var element = document.getElementById('myElement');

element.addEventListener('mouseover', function() {
    element.style.borderColor = 'red'; // Change border color on mouseover
});

element.addEventListener('mouseout', function() {
    element.style.borderColor = 'black'; // Revert border color when mouse leaves
});

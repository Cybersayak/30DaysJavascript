const colorBox = document.getElementById('colorBox');

// Set background color on mouseover
colorBox.addEventListener('mouseover', function() {
    colorBox.style.backgroundColor = 'lightgreen';
});

// Reset background color on mouseout
colorBox.addEventListener('mouseout', function() {
    colorBox.style.backgroundColor = 'lightblue';
});

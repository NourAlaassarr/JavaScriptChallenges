var element = document.querySelector('#demo');

document.addEventListener('mousemove', function(e) {
    element.style.left = e.clientX + 'px'; // Add 'px' to the value
    element.style.top = e.clientY + 'px';
});

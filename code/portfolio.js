document.addEventListener('DOMContentLoaded', function() {
    const port = document.querySelector('.port');
    const portImg = document.querySelector('.port img');
    const portDropdown = document.querySelector('.port-dropdown');
    
    portImg.addEventListener('click', function() {
        portDropdown.classList.toggle('show');
    });

    port.addEventListener('mouseleave', function() {
        portDropdown.classList.remove('show');
    });
});

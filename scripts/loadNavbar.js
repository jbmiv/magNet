// loadNavbar.js
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');

    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the navbar:', error);
        });
});
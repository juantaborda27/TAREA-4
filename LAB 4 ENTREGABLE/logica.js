document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
        alert('Por favor, completa todos los campos requeridos.');
        event.preventDefault();
    }
});

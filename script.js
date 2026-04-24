const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from reloading

    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    // Sending data to your Python backend
    fetch('http://127.0.0.1:5000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success') {
            alert("Message sent successfully 😊!");
            contactForm.reset();
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Make sure your Python server is running!");
    });
});
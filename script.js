const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from reloading

    // Collect data from the form inputs
    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    // Send data to your LIVE Render backend
    fetch('https://portfolio-backend-py-1.onrender.com/send-email', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: formData.email,   // Corrected: pulling from formData object
            message: formData.message
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            alert("Server error. Check if your Render App Password is set.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Could not connect to the server. It might be 'sleeping'—wait 30 seconds and try again!"); 
    });
});

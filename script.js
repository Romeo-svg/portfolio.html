const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from reloading

    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    // Sending data to your Python backend
    // Change the URL from 127.0.0.1 to your live Render link
fetch('https://portfolio-backend-py.onrender.com/send-email', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,      // Ensure these variable names match your form inputs
        message: message
    })
})
.then(response => {
    if (response.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
    } else {
        alert("Server error. Please try again later.");
    }
})
.catch(error => {
    // This is the part that was showing the error in your screenshot!
    console.error('Error:', error);
    alert("Make sure your Python server is running!"); 
});

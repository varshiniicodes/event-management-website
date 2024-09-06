// ====== Event Details Page: Show Registration Form ======
if (document.getElementById("register-button")) {
    document.getElementById("register-button").addEventListener("click", function() {
        document.getElementById("registration-form").style.display = "block";
    });
}

// ====== Login Page: Handle Login Form Submission ======
if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get the values from the form
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        // Basic validation
        if (username === "admin" && password === "password123") {
            alert("Login successful!");
            // Redirect to the home page or another page after successful login
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password");
        }
    });
}

// ====== Contact Page: Handle Contact Form Submission ======
if (document.getElementById("contact-form")) {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get the values from the form
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        
        // Basic form validation (could be more complex in a real app)
        if (name && email && message) {
            alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
            // Clear the form fields after submission
            document.getElementById("contact-form").reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// ====== Event Page: Link to Event Details ======
if (document.querySelectorAll(".event-cards .card")) {
    document.querySelectorAll(".event-cards .card").forEach(function(card) {
        card.addEventListener("click", function() {
            // Assuming the href attribute is set in the HTML to direct to the specific event page
            window.location.href = this.getAttribute("href");
        });
    });
}

// ====== General: Smooth Scroll for Navigation Links ======
if (document.querySelectorAll('nav ul li a')) {
    document.querySelectorAll('nav ul li a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ====== Login Form: Simulate Login ======
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Simulate a user with predefined credentials (replace with backend validation in real scenarios)
    const validEmail = 'srivarshini@gmail.com';
    const validPassword = 'varshini';

    // Check if the entered credentials are correct
    if (email === validEmail && password === validPassword) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to a different page on successful login
    } else {
        // Display an error message
        errorMessage.textContent = 'Invalid email or password. Please try again.';
    }
});

// ====== Event Registration Success Alert ======
document.querySelectorAll('#register-button, .cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Registration successful!'); // Display success alert
    });
});

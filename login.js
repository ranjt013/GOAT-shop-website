// login.js

// Function to handle login
function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for username and password (for demonstration purposes)
    // In a real-world app, validate credentials on the server side
    if (username === 'user' && password === 'password') {
        // Save login status to localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirect to the index page after login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}

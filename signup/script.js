document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signup-button');
    signupButton.addEventListener('click', signup);

    function signup() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You can send this data to a server for processing
        // Example: You can use JavaScript's Fetch API to send a POST request to your server.

        // For demonstration purposes, we'll just display an alert
        alert(`Signup Successful!\nName: ${name}\nEmail: ${email}`);
    }
});

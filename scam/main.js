document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission

    // Retrieve login information from form
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(username, password)
    const url = 'http://localhost:8000'; // URL of the Python server
    const message = username+","+password; // Text message to send in the request body

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: message,
    })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully!');
            } else {
                console.error('Failed to send message:', response.status);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });

});
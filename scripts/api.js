document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const emailInput = document.querySelector(".input");
    const passwordInput = document.querySelector(".password");

    const email = emailInput.value;
    const password = passwordInput.value;

    // API endpoint URL
    const apiUrl = "https://rantec-hh1l.onrender.com/authRoute/login";

    // Create the request body
    const requestBody = {
        email: email,
        password: password
    };

    // POST request to the API
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // Check the user's role
            if (data.role === "farmer") {
                // Redirect to the farmer dashboard
                window.location.href = "farmerhome.html";
            } else if (data.role === "doctor") {
                // Redirect to the vet doctor dashboard
                window.location.href = "vethome.html";
            } else {
                // Handle unknown role (optional)
                alert("Unknown user role. Please contact support.");
            }
        } else {
            // Handle failed login
            console.log("Login failed. Please check your credentials.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while processing your request. Please try again later.");
    });
});

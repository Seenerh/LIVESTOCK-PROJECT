// Function for registration
function registerUser(event) {
    event.preventDefault();
    const role = document.getElementById("role").value;
    const fullName = document.querySelector(".input[name='fullname']").value;
    const email = document.querySelector(".input[name='email']").value;
    const location = document.querySelector(".input[name='location']").value;
    const password = document.querySelector(".password").value;
    const license = document.querySelector(".input[name='license']").value;

    // API endpoint URL for registration
    const apiUrl = "https://rantec-hh1l.onrender.com/authRoute/register";

    // Request body
    const requestBody = {
        role: role,
        fullName: fullName,
        email: email,
        location: location,
        password: password,
        license: license
    };

    // POST request to the registration API
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle successful registration
            alert("Registration successful!");

            // Redirect user based on their selected role
            if (role === 'doctor') {
                window.location.href = 'vethome.html'; // Redirect to the vet dashboard
            } else if (role === 'farmer') {
                window.location.href = 'farmerhome.html'; // Redirect to the farmer dashboard
            }
        } else {
            // Handle failed registration
            alert("Registration failed. Please try again.");
        }
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while processing your request.");
    });
}

// Function for login
function loginUser(event) {
    event.preventDefault();
    // Get user inputs
    const emailInput = document.querySelector(".input[name='email']");

    const passwordInput = document.querySelector(".password");

    const email = emailInput.value;
    console.log(email)
    const password = passwordInput.value;
    console.log(password)

    // API endpoint URL
    const apiUrl = "https://rantec-hh1l.onrender.com/authRoute/login";

    // Request body
    const requestBody = {
        email: email,
        password: password
    };

    // POST request to the login API
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        console.log(response);
        if (!response.ok) {
            console.log("Server responded with an error.");
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("User role: " + data.role);
        console.log(data);
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
}

// Event listeners
// document.getElementById("signup-button").addEventListener("click", registerUser);
document.getElementById("login-form").addEventListener("submit", loginUser);
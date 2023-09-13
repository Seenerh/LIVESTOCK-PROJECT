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
        // fullName: fullName,
        name: fullName,
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
        console.log(`userdata  ${ JSON.stringify(data)}`); // Convert data to JSON string for logging
        if (data.success) {
            // Handle successful registration
            alert("Your acoount is successfully created!");

            // Redirect user based on their selected role
            // if (data.role === 'doctor') {
                window.location.href = 'login.html'; // Redirect to the vet dashboard
            // } else if (data.role === 'farmer') {
                // window.location.href = 'farmerhome.html'; // Redirect to the farmer dashboard
            // }
        } else {
            // Handle failed registration
            alert("Registration failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while processing your request.");
    });
}

// Event listeners
document.getElementById("signup-button").addEventListener("click", registerUser);

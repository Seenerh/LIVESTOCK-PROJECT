document.getElementById("signup-button").addEventListener("click", function(event) {
    event.preventDefault();
    const role = document.getElementById("role").value;
    const fullName = document.querySelector(".input[name='fullname']").value;
    const email = document.querySelector(".input[name='email']").value;
    const location = document.querySelector(".input[name='location']").value;
    const password = document.querySelector(".password").value;
    const license = document.querySelector(".input[name='license']").value;

    // API endpoint URL for registration
    const apiUrl = "https://rantec-hh1l.onrender.com/authRoute/register";

    //  request body
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
            // Handle successful registration (e.g., show a success message)
            alert("Registration successful!");

            // Redirect user based on their selected role
            if (role === 'doctor') {
                window.location.href = 'vethome.html'; // Redirect to the vet dashboard
            } else if (role === 'farmer') {
                window.location.href = 'farmerhome.html'; // // Redirect to the farmer dashboard
                
                    }
        } else {
            // Handle failed registration
            alert("Registration failed. Please try again.");
        }
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
        console.log("An error occurred while processing your request.");
    });
});


// Function for login
async function loginUser(event) {
    event.preventDefault();
    const emailInput = document.querySelector(".input[name='email']");
    const passwordInput = document.querySelector(".password");
    const email = emailInput.value;
    const password = passwordInput.value;

    const apiUrl = "https://rantec-hh1l.onrender.com/authRoute/login";

    const requestBody = {
        email: email,
        password: password
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Log the entire data object
        console.log("Data received:", data);
        console.log(data.data.role)

        if (data.success) {
            // Check if the 'role' property is present in data
            if (data.data.role) { // Directly check if data.role exists
                console.log("User role: " + data.data.role);

                if (data.data.role === "farmer") {
                    // Redirect to the farmer dashboard
                    window.location.href = "farmerhome.html";
                } else if (data.data.role === "doctor") {
                    // Redirect to the vet doctor dashboard
                    window.location.href = "vethome.html";
                } else if (data.data.role === "Admin") {
                     // Redirect to the vet admin dashboard
                    window.location.href = "admindashboard.html"
                } else {
                    // Handle unknown role (optional)
                    alert("Unknown user role. Please contact support.");
                }
            } else {
                console.log("Role property not found in data.");
            }
        } else {
            console.log("Login failed. Please check your credentials.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while processing your request. Please try again later.");
    }
}


// Event listeners
document.getElementById("login-form").addEventListener("submit", loginUser);

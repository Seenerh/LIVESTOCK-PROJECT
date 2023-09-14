// Function to create a new row for the table
function createLivestockRow(breed, name, sex) {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td class="people">
            <div class="people-des">
                <h5>${name}</h5>
            </div>
        </td>
        <td class="people-des">
            <h5>${breed}</h5>
        </td>
        <td class="active"><p>${sex}</p></td>
        <td class="role">
            <p style="color: red;">Not Assigned</p>
        </td>
        <td class="role">
            <button class="view-button" onclick="viewLivestockDetails('${breed}', '${name}', '${sex}')">
                <i class="fa-solid fa-eye"></i>
            </button>
        </td>
        <td class="edit scanButton"  data-image="images/qr-code.png">
            <i class="fa-solid fa-qrcode"></i>
        </td>
    `;

    return newRow;
}

// Function to hide the pop-up
function hidePopup() {
    const popup = document.getElementById("formContainer");
    popup.style.visibility = "hidden";
}

// Function to add livestock to the table and clear input fields
function addLivestockToTableAndClearFields(breed, name, sex, age, weight) {
    const newRow = createLivestockRow(breed, name, sex);

    livestockTableBody.appendChild(newRow);

    // Clear the input fields
    document.getElementById("breed").value = "";
    document.getElementById("name").value = "";
    document.getElementById("sex").value = "male"; // Set default value to "male"
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
}

// Event listener for livestock form submission
livestockForm.addEventListener("submit", function (e) {
    e.preventDefault();
    hidePopup();

    // Retrieve values from the form fields
    const breed = document.getElementById("breed").value;
    const name = document.getElementById("name").value;
    const sex = document.getElementById("sex").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;

    // Create a JSON object with the livestock data
    const livestockData = {
        breed,
        name,
        sex,
        age,
        weight,
    };

    // Send a POST request to your backend API to add the livestock
    fetch("https://rantec-hh1l.onrender.com/livestockRoute", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(livestockData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // Assuming your API returns the added livestock data, you can add it to the table and clear the input fields
        addLivestockToTableAndClearFields(data.breed, data.name, data.sex, data.age, data.weight);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});

// Event listener to show the form pop-up
const addButton = document.getElementById('addButton');
const formContainer = document.getElementById('formContainer');

addButton.addEventListener('click', function() {
    formContainer.style.visibility = 'visible';
});

// Event listener to hide the form pop-up
const closeButton = formContainer.querySelector('.close');
closeButton.addEventListener('click', hidePopup);

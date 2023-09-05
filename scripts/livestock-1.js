const openFormBtn = document.getElementById('open-form-btn');
const formPopup = document.getElementById('livestock-form');

openFormBtn.addEventListener('click', () => {
  if (formPopup.style.display === 'block') {
    formPopup.style.display = 'none';
  } else {
    formPopup.style.display = 'block';
  }
});


/* Dropdown Content */
document.addEventListener("DOMContentLoaded", function() {
  const editLink = document.querySelector(".edit-picture");
  const fileInput = document.createElement("input");
  fileInput.type = "file";

  editLink.addEventListener("click", function(event) {
    event.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", function() {
    const file = fileInput.files[0];
    const profileImage = document.querySelector(".profile img");

    const reader = new FileReader();
    reader.onload = function() {
      profileImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
});

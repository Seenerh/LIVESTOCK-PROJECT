
const navMenu = document.getElementById('menu-btn');
const navToggle = document.getElementById('menu');
const navClose = document.getElementById('active');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

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

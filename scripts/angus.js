// Helper function to generate QR code
function generateQRCode(text, targetElement) {
  const qr = new QRCode(targetElement, {
      text: text,
      width: 128,
      height: 128,
  });
}

/**===========================  Event listener for scanButton and qrCodeModal =================== ******/
const scanButtons = document.querySelectorAll(".scanButton");
const modal = document.getElementById("qrCodeModal");
const qrCodeImage = document.getElementById("qrCodeImage");

scanButtons.forEach((scanButton) => {
  scanButton.addEventListener("click", function() {
      const qrCodeContent = "Your QR code data"; // Replace this with the data you want to encode as a QR code

      // Generate the QR code and display it
      generateQRCode(qrCodeContent, qrCodeImage);

      modal.style.display = "block";
  });
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  // Remove the previously generated QR code
  qrCodeImage.innerHTML = "";

  modal.style.display = "none";
});

/*========================Event listener for addButton and formContainerm=====================*/
const addButton = document.getElementById('addButton');
const formContainer = document.getElementById('formContainer');

addButton.addEventListener('click', function() {
  formContainer.style.display = 'block';
  formContainer.style.visibility = 'visible';
});

const closeButton = formContainer.querySelector('.close');
closeButton.addEventListener('click', function() {
  formContainer.style.display = 'none';
});


  // document.addEventListener('DOMContentLoaded', function() {
  //   const menuBtn = document.getElementById('menu-btn');
  //   const asideBar = document.getElementById('menu');

  //   menuBtn.addEventListener('click', function() {
  //     asideBar.classList.toggle('active');
  //   });
  // });

   fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('menu').innerHTML = data;
      });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const toggleButton = document.querySelector('#menu-btn');
  //   const asideMenu = document.getElementById('#menu');
  
  //   // Fetch and insert the navigation menu
  //   fetch('nav.html')
  //     .then(response => response.text())
  //     .then(data => {
  //       asideMenu.innerHTML = data;
  //     })
  //     .catch(error => console.error('Error fetching navigation:', error));
  
  //   // Toggle aside visibility
  //   toggleButton.addEventListener('click', function() {
  //     asideMenu.classList.toggle('show');
  //   });
  // });
  
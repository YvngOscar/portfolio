const hamburgerBtn = document.querySelector('#hamburger');
const navList = document.querySelector("#nav-list");

function toggleBtn() {
  navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleBtn)
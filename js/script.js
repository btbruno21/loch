let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("show");
}

setInterval(changeImage, 3000);
const menuToggle = document.getElementById("menuToggle");
  const menuItems = document.getElementById("menuItems");
  const spans = menuToggle.querySelectorAll("span");
  let scrollPosition = 0;
  menuToggle.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");
    menuItems.classList.toggle("flex");

    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-2");
    spans[1].classList.toggle("opacity-0");
    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-2");
    if (menuItems.classList.contains("flex")) {
      disableScroll();
    } else {
      enableScroll();
    } 
  });


function disableScroll() {
  scrollPosition = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `${scrollPosition}px`;
  document.body.style.width = "100%";
}

function enableScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}


  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-item');
  
    links.forEach((link, index) => {
      link.addEventListener('mouseover', () => {
        links.forEach((otherLink, otherIndex) => {
          if (index === 0 && otherIndex !== 0) {
            otherLink.classList.add('hover-gray');
          } else if (index !== 0 && otherIndex !== index) {
            otherLink.classList.add('hover-gray');
          }
        });
      });
  
      link.addEventListener('mouseout', () => {
        links.forEach((otherLink) => {
          otherLink.classList.remove('hover-gray');
        });
      });
    });
  });


  const prevButton = document.querySelector('.prevButton');
  const nextButton = document.querySelector('.nextButton');
  const carousel = document.querySelector('.carousel');
  
  let currentIndex = 0;
  let boxWidth = 350 + 16;
  let visibleBoxes = 1;
  const totalBoxes = document.querySelectorAll('.carousel-box').length;
  
  function setCarouselProperties() {
    if (window.innerWidth < 768) {
      boxWidth = 350 + 16;
      visibleBoxes = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      boxWidth = 360 + 16;
      visibleBoxes = 2;
    } else {
      boxWidth = 370 + 16;
      visibleBoxes = 4;
    }
  }
  
  function initializeCarousel() {
    setCarouselProperties();
    const initialOffset = (boxWidth / 2) - (window.innerWidth - (boxWidth * visibleBoxes)) / 2;
    carousel.style.transform = `translateX(${initialOffset}px)`;
  }
  
  initializeCarousel();
  
  function updateCarousel() {
    const maxIndex = totalBoxes - visibleBoxes;
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
  
    const offset = -(currentIndex * boxWidth);
    const totalCarouselWidth = totalBoxes * boxWidth;
    const maxOffset = totalCarouselWidth - (visibleBoxes * boxWidth);
    
    if (offset < -maxOffset) {
      carousel.style.transform = `translateX(-${maxOffset}px)`;
    } else {
      carousel.style.transform = `translateX(${offset}px)`;
    }
  }
  
  nextButton.addEventListener('click', () => {
    if (currentIndex < totalBoxes - visibleBoxes) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
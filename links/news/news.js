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
const prevButton1 = document.querySelector('.prevButton-1');
  const nextButton1 = document.querySelector('.nextButton-1');
  const carousel1 = document.querySelector('.carousel-1');
  let currentIndex1 = 0;
  let boxWidth1 = 200 + 16; 
  let visibleBoxes1 = 1;    
  
  function setCarouselProperties1() {
    if (window.innerWidth < 640) {
      boxWidth1 = 350 + 16;
      visibleBoxes1 = 1;
    } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      boxWidth1 = 350 + 16;
      visibleBoxes1 = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      boxWidth1 = 350 + 16;
      visibleBoxes1 = 2; 
    } else {
      boxWidth1 = 350 + 16;
      visibleBoxes1 = 2;  
    }
  
    carousel1.style.transition = 'transform 0.2s ease-in-out';  
  }
  
  function updateCarousel1() {
    const totalBoxes1 = carousel1.querySelectorAll('.carousel-box').length;
    const maxIndex1 = totalBoxes1 - visibleBoxes1;
    currentIndex1 = Math.max(0, Math.min(currentIndex1, maxIndex1));
  
    const offset1 = -(currentIndex1 * boxWidth1);
    carousel1.style.transform = `translateX(${offset1}px)`;
  }
  
  nextButton1.addEventListener('click', () => {
    currentIndex1++;
    updateCarousel1();
  });
  
  prevButton1.addEventListener('click', () => {
    currentIndex1--;
    updateCarousel1();
  });
  
  setCarouselProperties1();
  window.addEventListener('resize', setCarouselProperties1);

  const prevButton2 = document.querySelector('.prevButton-2');
  const nextButton2 = document.querySelector('.nextButton-2');
  const carousel2 = document.querySelector('.carousel-2');
  let currentIndex2 = 0;
  let boxWidth2 = 200 + 16; 
  let visibleBoxes2 = 1;    
  
  function setCarouselProperties2() {
    if (window.innerWidth < 640) {
      boxWidth2 = 350 + 16;
      visibleBoxes2 = 1;
    } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      boxWidth2 = 350 + 16;
      visibleBoxes2 = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      boxWidth2 = 350 + 16;
      visibleBoxes2 = 2; 
    } else {
      boxWidth2 = 350 + 16;
      visibleBoxes2 = 2;  
    }
  
    carousel2.style.transition = 'transform 0.2s ease-in-out';  
  }
  
  function updateCarousel2() {
    const totalBoxes2 = carousel2.querySelectorAll('.carousel-box2').length;
    const maxIndex2 = totalBoxes2 - visibleBoxes2;
    currentIndex2 = Math.max(0, Math.min(currentIndex2, maxIndex2));
  
    const offset2 = -(currentIndex2 * boxWidth2);
    carousel2.style.transform = `translateX(${offset2}px)`;
  }
  
  nextButton2.addEventListener('click', () => {
    currentIndex2++
    updateCarousel2();
  });
  
  prevButton2.addEventListener('click', () => {
    currentIndex2--;
    updateCarousel2();
  });
  
  setCarouselProperties2();
  window.addEventListener('resize', setCarouselProperties2);
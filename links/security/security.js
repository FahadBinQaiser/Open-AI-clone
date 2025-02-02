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
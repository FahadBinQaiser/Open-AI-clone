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
    if (window.innerWidth < 640) {
      boxWidth = 200 + 16;
      visibleBoxes = 1;
    }else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      boxWidth = 230 + 16;
      visibleBoxes = 2;
    }
     else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      boxWidth = 350 + 16;
      visibleBoxes = 2;
    } else {
      boxWidth = 300 + 16;
      visibleBoxes = 6;
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
  // Second Carousel
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
    visibleBoxes1 = 3;  
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

document.addEventListener('DOMContentLoaded', function () {
  const faqData = [
    {
      question: "How does ChatGPT's pricing work?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "Is ChatGPT free to use?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "Does OpenAI offer a ChatGPT plan for educational institutions?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "Does OpenAI offer a discount for nonprofits?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "How many users are supported on each subscription plan?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "What are my payment options?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "How secure is ChatGPT?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    },
    {
      question: "How does ChatGPT use my data?",
      answer: "The free version of ChatGPT is available to everyone. Paid plans (Plus, Team, and Enterprise) are priced per user per month."
    }
  ];

  const faqContainer = document.getElementById('faqContainer');

  faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item', 'pb-2', 'border-b', 'border-b-[#333]');
    faqItem.innerHTML = `
      <input type="checkbox" id="faq${index + 1}" class="peer hidden" />
      <label for="faq${index + 1}" class="flex justify-between items-center cursor-pointer">
        <h1>${faq.question}</h1>
        <span class="absolute right-16">+</span>
      </label>
      <div class="content overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[300px] peer-checked:mt-4">
        <p class="text-sm text-[#777]">${faq.answer}</p>
      </div>
    `;
    faqContainer.appendChild(faqItem);
  });

  const checkboxes = document.querySelectorAll('.peer');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      checkboxes.forEach(item => {
        if (item !== checkbox) {
          item.checked = false;
        }
      });
    });
  });
});
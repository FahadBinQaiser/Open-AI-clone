const sixBoxesButtons = document.querySelectorAll('.sixBoxesRow button');
const imgBox = document.getElementById("image-box2")
    const defaultButton = sixBoxesButtons[0];

    document.addEventListener("DOMContentLoaded", () => {
      const sixBoxesButtons = document.querySelectorAll(".sixBoxesRow button");
      const pictures = document.getElementById("displayingPictures");
      const imgTag = pictures.querySelector("img");
      const sources = pictures.querySelectorAll("source");
    
      function updatePictureSources(desktopImage, mobileImage) {
        sources[0].srcset = mobileImage; 
        sources[1].srcset = desktopImage; 
        imgTag.src = window.innerWidth <= 768 ? mobileImage : desktopImage;
      }
    
      sixBoxesButtons.forEach((button) => {
        button.addEventListener("click", () => {
          switch (button.id) {
            case "engineering":
              updatePictureSources(
                "enterpriseImages/01_enterprise_workflow_engineering_desktop_dark.webp",
                "enterpriseImages/01_enterprise_workflow_engineering_dark_mobile.webp"
              );
              break;
            case "marketing":
              updatePictureSources(
                "enterpriseImages/02_enterprise_workflow_marketing_desktop_dark.webp",
                "enterpriseImages/02_enterprise_workflow_marketing_mobile_dark.webp"
              );
              break;
            case "sales":
              updatePictureSources(
                "enterpriseImages/03_enterprise_workflow_sales_desktop_dark.webp",
                "enterpriseImages/03_enterprise_workflow_sales_mobile_dark.webp"
              );
              break;
            case "finance":
              updatePictureSources(
                "enterpriseImages/04_enterprise_workflow_finance_desktop_dark.webp",
                "enterpriseImages/04_enterprise_workflow_finance_mobile_dark.webp"
              );
              break;
            case "IT":
              updatePictureSources(
                "enterpriseImages/05_enterprise_workflow_IT_desktop_dark.webp",
                "enterpriseImages/05_enterprise_workflow_IT_mobile_dark.webp"
              );
              break;
            case "operations":
              updatePictureSources(
                "enterpriseImages/06_enterprise_workflow_operations_desktop_dark.webp",
                "enterpriseImages/06_enterprise_workflow_operations_mobile_dark.webp"
              );
              break;
            case "hr":
              updatePictureSources(
                "enterpriseImages/07_enterprise_workflow_hr_desktop_dark.webp",
                "enterpriseImages/07_enterprise_workflow_hr_mobile_dark.webp"
              );
              break;
          }
        });
      });
    });
        function updateImage() {
      const svgImage = document.getElementById("svgImage")
      if (window.innerWidth <= 640) {
        svgImage.src = "enterpriseImages/marketecture_mobile_dark.svg";
      } else {
        svgImage.src = "enterpriseImages/marketecture_dark.svg";
      }
    }
    window.addEventListener("load", updateImage);
    window.addEventListener("resize", updateImage);

    defaultButton.classList.add('bg-white', 'text-[#333]');
    defaultButton.classList.remove('hover:bg-[#333]');
    sixBoxesButtons.forEach((boxesInside) => {
      if (boxesInside !== defaultButton) {
        boxesInside.classList.remove('hover:bg-[#333]', 'text-white');
      }
    })

    sixBoxesButtons.forEach((button) => {
    button.addEventListener('click', () => {

      sixBoxesButtons.forEach((b) => { b.classList.remove("bg-white", "text-[#333]");
        b.classList.add("hover:bg-[#333]", "text-white");
      });
      button.classList.add("bg-white", "text-[#333]");
      button.classList.remove("hover:bg-[#333]");
    });

    button.addEventListener('mouseover', () => {
      if (button.classList.contains('bg-white')) {
        button.classList.remove('hover:bg-[#333]');
      }
    });

    button.addEventListener('mouseout', () => {
      if (!button.classList.contains('bg-white')) {
        button.classList.add('hover:bg-[#333]');
      }
    });
  });

const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');
const carousel = document.querySelector('.carousel');

let currentIndex = 0;
let boxWidth = 300 + 16;
let visibleBoxes = 1;
const totalBoxes = document.querySelectorAll('.carousel-box').length;

function setCarouselProperties() {
  if (window.innerWidth < 640) {
    boxWidth = 120 + 16;
    visibleBoxes = 2;
  }else if(window.innerWidth > 640 && window.innerWidth < 768){
      boxWidth = 160 + 16;
      visibleBoxes = 2;
  } 
  else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    boxWidth = 220 + 16;
    visibleBoxes = 3;
  } else {
    boxWidth = 250 + 16;
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

window.addEventListener('resize', initializeCarousel);
document.addEventListener("DOMContentLoaded", () => {
  const firstCheckbox = document.querySelector(".peer");
  if (firstCheckbox) {
    firstCheckbox.checked = true; 
  }
  document.querySelectorAll(".peer").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        document.querySelectorAll(".peer").forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox && otherCheckbox.checked) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
});

const contentData = [
  {
    id: 'item1',
    title: 'High speed access to GPT-4o, our flagship model',
    description: 'GPT-4o can hear, see, and speak, with improved language capabilities across quality and speed.',

  },
  {
    id: 'item2',
    title: 'Access to OpenAI, o1 new series of reasoning models',
    description: 'The o1 series reason through complex tasks in domains like mathematics, coding, science, strategy, and logistics. ',

  },
  {
    id: 'item3',
    title: 'Advanced capabilities fully integrated with frontier models',
    description: 'Native tools like advanced voice, data analysis, memory, browsing, retrieval, and image generation are built into one platform.',

  },
  {
    id: 'item4',
    title: 'Custom AI templates for your organization',
    description: 'Create custom versions of ChatGPT that follow specific instructions, tap into uploaded knowledge, and can take actions in other tools. Share them with your workspace to get employees started with AI faster. ',
  },
];

const contentContainer = document.getElementById('content-container');
if (contentContainer) {
  contentData.forEach(item => {
    const sectionHTML = `
      <div class="border-b border-[#333] w-full py-4 relative">
        <input type="checkbox" id="${item.id}" class="hidden peer" />
        <label for="${item.id}" class="flex flex-row justify-between items-center cursor-pointer">
          <h2 class="text-md text-left font-semibold">${item.title}</h2>
          <span class="text-xl">+</span>
        </label>
        <div class="content overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[300px] peer-checked:mt-4">
          <p class="text-sm text-[#777]">${item.description}</p>
         
        </div>
      </div>
    `;
    contentContainer.insertAdjacentHTML('beforeend', sectionHTML);
  });
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
    boxWidth1 = 250 + 16;
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

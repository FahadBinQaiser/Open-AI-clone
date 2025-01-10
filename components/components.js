const spans = document.querySelectorAll('span[data-target]');
spans.forEach((span) => {
  span.addEventListener('click', () => {

    const targetClass = span.getAttribute('data-target');
    const targetParagraph = document.querySelector(`.${targetClass}`);

    if (span.textContent === "+") {
      span.textContent = "-";

      const allParagraphs = document.querySelectorAll('p');
      const allSpans = document.querySelectorAll('span[data-target]');

      allParagraphs.forEach((p) => {
        p.classList.add('hidden');
      });

      allSpans.forEach((s) => {
        if (s !== span) s.textContent = "+";
      });

      targetParagraph.classList.remove('hidden');

    }
    else {
      span.textContent = "+";
      targetParagraph.classList.add('hidden');
    }
  });
});

document.getElementById("analyzeData").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("displayImage").src = "componentImages/rowBoxes/analyze_data_team_link.webp"; 
});

document.getElementById("accelerateCoding").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("displayImage").src = "componentImages/rowBoxes/Accelerate_coding_team_link.webp"; 
});

document.getElementById("generateContent").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("displayImage").src = "componentImages/rowBoxes/generate_content_team_link.webp";
});

document.getElementById("brainstormIdeas").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("displayImage").src = "componentImages/rowBoxes/brainstorm_ideas_team_link.webp";
});
const performanceButtons = document.querySelectorAll('.rowBoxes button');
const initialButton = document.querySelector('#analyzeData');

performanceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    performanceButtons.forEach((b) => {
      if (b !== button) {
        b.classList.remove("bg-white", "text-[#333]");
      }
    });
    button.classList.add("bg-white", "text-[#333]");
    if (button !== initialButton) {
      initialButton.classList.add("text-white");
    }
  });

  button.addEventListener('mouseover', () => {
    if (button.classList.contains("bg-white") && button.classList.contains("text-[#333]")) {
      button.classList.remove("hover:bg-[#333]");
    }
  });

  button.addEventListener('mouseout', () => {
    if (button.classList.contains("bg-white") && button.classList.contains("text-[#333]")) {
      button.classList.remove("hover:bg-[#333]");
    }
  });
});
const sixBoxesButtons = document.querySelectorAll('.sixBoxesRow button');
const dynamicHeading = document.getElementById('dynamic-heading');

if (dynamicHeading) {
    const defaultButton = sixBoxesButtons[0];

    defaultButton.classList.add('bg-white', 'text-[#333]');
    defaultButton.classList.remove('hover:bg-[#333]');
    sixBoxesButtons.forEach((boxesInside) => {
      if (boxesInside !== defaultButton) {
        boxesInside.classList.remove('hover:bg-[#333]', 'text-white');
      }
    })
    dynamicHeading.textContent = defaultButton.getAttribute('data-header');

    sixBoxesButtons.forEach((button) => {
    button.addEventListener('click', () => {

      sixBoxesButtons.forEach((b) => { b.classList.remove("bg-white", "text-[#333]");
        b.classList.add("hover:bg-[#333]", "text-white");
      });
      button.classList.add("bg-white", "text-[#333]");
      button.classList.remove("hover:bg-[#333]");
      
      const newHeader = button.getAttribute('data-header');
      dynamicHeading.textContent = newHeader;
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
}

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
    title: 'Secured for your workspace',
    description: 'Get a dedicated workspace for your team with admin controls, team management, and stringent security. We never train on your data or conversations.',
    imgSrc: 'componentImages/01_team_workspace.webp',
  },
  {
    id: 'item2',
    title: 'Advanced models & capabilities',
    description: 'Consistent access to the most powerful OpenAI models and advanced capabilities like DALL·E for image generation, web browsing, data analysis, and more.',
    imgSrc: 'componentImages/01_team_workspace.webp',
  },
  {
    id: 'item3',
    title: 'Customized for your team',
    description: 'Collaborate by creating and sharing GPTs — custom versions of ChatGPT for specific use cases, departments, or proprietary datasets.',
    imgSrc: 'componentImages/01_team_workspace.webp',
  },
  {
    id: 'item4',
    title: 'Designed to support any task or project',
    description: 'From writing to coding, ChatGPT can help with quick tasks and ongoing projects. With projects, keep files, chats, and instructions in one place to maintain context as you work.',
    imgSrc: 'componentImages/01_team_workspace.webp',
  },
];

const contentContainer = document.getElementById('content-container');
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
        <div class="w-[200px] h-[200px] flex sm:hidden justify-center items-center mx-auto sm:w-[500px] sm:h-[500px] sm:order-none">
          <img src="${item.imgSrc}" class="rounded-none sm:rounded-xl mt-2 rounded-tr-none rounded-br-none w-full h-full object-cover" alt="${item.title}" />
        </div>
      </div>
    </div>
  `;
  contentContainer.insertAdjacentHTML('beforeend', sectionHTML);
});

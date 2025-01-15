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

document.addEventListener("DOMContentLoaded", () => {
  function updatePictureSources(baseImage, mobileImage) {
    const picture = document.getElementById("displayPicture");
    const sources = picture.querySelectorAll("source");

    sources[0].srcset = mobileImage;
    sources[1].srcset = baseImage;

    picture.querySelector("img").src = baseImage;
  }

  document.getElementById("analyzeData").addEventListener("click", () => {
    updatePictureSources(
      "/components/componentImages/rowBoxes/analyze_data_team_link.webp",
      "/components/componentImages/rowBoxes/analyze-data-mobile.webp"
    );
  });

  document.getElementById("accelerateCoding").addEventListener("click", () => {
    updatePictureSources(
      "/components/componentImages/rowBoxes/Accelerate_coding_team_link.webp",
      "/components/componentImages/rowBoxes/Accelerate_coding_mobile.webp"
    );
  });

  document.getElementById("generateContent").addEventListener("click", () => {
    updatePictureSources(
      "/components/componentImages/rowBoxes/generate_content_team_link.webp",
      "/components/componentImages/rowBoxes/Generate_content_mobile.webp"
    );
  });

  document.getElementById("brainstormIdeas").addEventListener("click", () => {
    updatePictureSources(
      "/components/componentImages/rowBoxes/brainstorm_ideas_team_link.webp",
      "/components/componentImages/rowBoxes/brainstorm_ideas_mobile.webp"
    );
  });
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
    if (!button.classList.contains("bg-white")) {
      button.classList.add("hover:bg-[#333]");
    }
  });

  button.addEventListener('mouseout', () => {
    if (button.classList.contains("bg-white")) {
      button.classList.remove("hover:bg-[#333]");
    }
  });
});
const sixBoxesButtons = document.querySelectorAll('.sixBoxesRow button');
const imgBox = document.getElementById("image-box2")
    const defaultButton = sixBoxesButtons[0];

    document.getElementById("engineering").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/01_enterprise_workflow_engineering_desktop_dark.webp"
    })
    document.getElementById("marketing").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/02_enterprise_workflow_marketing_desktop_dark.webp"
    })
    document.getElementById("sales").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/03_enterprise_workflow_sales_desktop_dark.webp"
    })
    document.getElementById("finance").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/04_enterprise_workflow_finance_desktop_dark.webp"
    })
    document.getElementById("IT").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/05_enterprise_workflow_IT_desktop_dark.webp"
    })
    document.getElementById("operations").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/06_enterprise_workflow_operations_desktop_dark.webp"
    })
    document.getElementById("hr").addEventListener("click", () =>{
      imgBox.src = "enterpriseImages/07_enterprise_workflow_hr_desktop_dark.webp"
    })

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
  if (window.innerWidth < 768) {
    boxWidth = 200 + 16;
    visibleBoxes = 2;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    boxWidth = 300 + 16;
    visibleBoxes = 2;
  } else {
    boxWidth = 260 + 16;
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
    imgSrc: 'componentImages/01_team_workspace.webp',
  },
  {
    id: 'item2',
    title: 'Access to OpenAI, o1 new series of reasoning models',
    description: 'The o1 series reason through complex tasks in domains like mathematics, coding, science, strategy, and logistics. ',
    imgSrc: 'enterprise/01_Thinking_Updated__1_.webp',
  },
  {
    id: 'item3',
    title: 'Advanced capabilities fully integrated with frontier models',
    description: 'Native tools like advanced voice, data analysis, memory, browsing, retrieval, and image generation are built into one platform.',
    imgSrc: 'enterprise/01_Thinking_Updated__1_.webp',
  },
  {
    id: 'item4',
    title: 'Custom AI templates for your organization',
    description: 'Create custom versions of ChatGPT that follow specific instructions, tap into uploaded knowledge, and can take actions in other tools. Share them with your workspace to get employees started with AI faster. ',
    imgSrc: 'enterprise/03_team_customize_desktop.webp',
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
          <div class="w-[200px] h-[200px] flex sm:hidden justify-center items-center mx-auto sm:w-[500px] sm:h-[500px] sm:order-none">
              <img src="${item.imgSrc}" class="rounded-none sm:rounded-xl mt-2 rounded-tr-none rounded-br-none w-full h-full object-cover" alt="${item.title}" />
          
          </div>
        </div>
      </div>
    `;
    contentContainer.insertAdjacentHTML('beforeend', sectionHTML);
  });
} 



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

sixBoxesButtons.forEach((button) => {
  button.addEventListener('click', () => {
    sixBoxesButtons.forEach((b) => {
      if (b !== button) {
        b.classList.remove("bg-white", "text-[#333]");
      }
    });
    button.classList.add("bg-white", "text-[#333]");
    const newHeader = button.getAttribute('data-header');
    dynamicHeading.textContent = newHeader;

    sixBoxesButtons.forEach((b) => b.classList.remove('bg-white', 'text-black'));
    button.classList.add('bg-white', 'text-black');
  });

  button.addEventListener('mouseover', () => {
    if (button.classList.contains("bg-white") && button.classList.contains("text-[#333]")) {
      button.classList.remove("hover:bg-[#333]");
    }
  });

  button.addEventListener('mouseout', () => {
    if (button.classList.contains("bg-white") && button.classList.contains("text-[#333]")) {
      button.classList.add("hover:bg-[#333]");
    }
  });
});
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');
const carousel = document.querySelector('.carousel');

let currentIndex = 0;
const boxWidth = 315 + 16;
const visibleBoxes = 4;
const totalBoxes = document.querySelectorAll('.carousel-box').length;

function initializeCarousel() {
  const initialOffset = (boxWidth / 2) - (window.innerWidth - (boxWidth * visibleBoxes)) / 2;
  carousel.style.transform = `translateX(${initialOffset}px)`;
}

initializeCarousel();

function updateCarousel() {
  const maxIndex = totalBoxes - visibleBoxes + 1;
  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
  const offset = -(currentIndex * boxWidth);
  carousel.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < totalBoxes ) {
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

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
const buttons = document.querySelectorAll('button');
const initialButton = document.querySelector('#analyzeData');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => {
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
      button.classList.add("hover:bg-[#333]");
    }
  });
});
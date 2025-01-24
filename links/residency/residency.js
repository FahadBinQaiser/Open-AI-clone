document.addEventListener('DOMContentLoaded', function () {
    const faqData = [
      {
        question: "Is the Residency an internship?",
        answer: "No. The Residency is not an internship. For those Residents who perform well we extend full-time offers to join OpenAI immediately upon completion of the six-months Residency.",
      },
      {
        question: "Can I pursue the Residency while enrolled in school or higher education studies?",
        answer: "No. Residents are full-time employees and therefore cannot be actively enrolled in any school programs while employed at OpenAI."
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
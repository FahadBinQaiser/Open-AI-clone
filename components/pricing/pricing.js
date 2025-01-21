const menuToggle = document.getElementById("menuToggle");
  const menuItems = document.getElementById("menuItems");
  const spans = menuToggle.querySelectorAll("span");

  menuToggle.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");
    menuItems.classList.toggle("flex");

    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-2");
    spans[1].classList.toggle("opacity-0");
    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-2");
  });

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
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/ month",
      description: "Explore how AI can help with everyday tasks",
      buttonText: "Get Free",
      features: [
        "Access to GPT-4o mini",
        "Standard voice mode",
        "Limited access to GPT-4o",
        "Limited access to file uploads, advanced data analysis, web browsing, and image generation",
        "Use custom GPTs",
      ],
      additional: `
        <li>
          Have an existing plan? 
          <a href="#" class="text-white">See <span class="underline">billing help</span></a>
        </li>
      `,
    },
    {
      name: "Plus",
      price: "$20",
      period: "/ month",
      description: "Level up productivity and creativity with expanded access",
      buttonText: "Get Plus",
      features: [
        "Everything in Free",
        "Extended limits on messaging, file uploads, advanced data analysis, and image generation",
        "Standard and advanced voice mode",
        "Limited access to o1 and o1-mini",
        "Opportunities to test new features",
        "Create and use custom GPTs",
      ],
      additional: '',
    },
    {
      name: "Pro",
      price: "$200",
      period: "/ month",
      description: "Get the best of OpenAI with the highest level of access",
      buttonText: "Get Pro",
      features: [
        "Everything in Plus",
        "Unlimited* access to GPT-4o and o1",
        "Unlimited* access to advanced voice",
        "Access to o1 pro mode, which uses more compute for the best answers to the hardest questions",
      ],
      additional: `
        <li class="text-lg">
          *Usage must comply with our <span class="underline">policies</span>
        </li>
      `,
    },
  ];
  
  const container = document.getElementById("pricingBoxes");

  plans.forEach((plan) => {
    const planHTML = `
      <div class="flex-1 bg-[#1a1a1a] text-white p-8 rounded-lg">
        <h3 class="text-xl mb-2 font-semibold">${plan.name}</h3>
        <h2 class="text-2xl font-medium mb-4">
          ${plan.price} <span class="text-[15px]">${plan.period}</span>
        </h2>
        <p class="text-md mb-6">${plan.description}</p>
        <button class="bg-white text-black rounded-3xl px-4 py-2 mb-8">${plan.buttonText}</button>
        <ul class="text-left text-[14px] font-medium mb-6 space-y-5">
          ${plan.features.map((feature) => `<li>&#10003; ${feature}</li>`).join("")}
          ${plan.additional || ""}
        </ul>
      </div>
    `;
  
    const planElement = document.createElement("div");
    planElement.innerHTML = planHTML;

    container.appendChild(planElement.firstElementChild);
  });

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


  const freeHeading = document.getElementById("freeHeading");
  const freeButton = document.getElementById("freeButton");
  const free = document.getElementById("free");
  const plus  = document.getElementById("plus");
  const pro = document.getElementById("pro");
  const team = document.getElementById("team");
  const enterprise = document.getElementById("enterprise");

  free.onclick = () =>{
    freeHeading.textContent = "Free"
    freeButton.textContent = "Get Free"
  }
  plus.onclick = () =>{
    freeHeading.textContent = "Plus"
    freeButton.textContent = "Get Plus"
  }
  pro.onclick = () =>{
    freeHeading.textContent = "Pro"
    freeButton.textContent = "Get Pro"
  }
  team.onclick = () =>{
    freeHeading.textContent = "Team"
    freeButton.textContent = "Get Team"
  }
  enterprise.onclick = () =>{
    freeHeading.textContent = "Enterprise"
    freeButton.textContent = "Contact sales"
  }

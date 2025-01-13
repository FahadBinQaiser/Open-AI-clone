// Starting of the file!

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


const contentOfBoxes = [
    { desc: "Lorem ipsum dolor sit amet 1" },
    { desc: "Lorem ipsum dolor sit amet 2" },
    { desc: "Lorem ipsum dolor sit amet 3" },
    { desc: "Lorem ipsum dolor sit amet 4" },
    { desc: "Lorem ipsum dolor sit amet 5" },
    { desc: "Lorem ipsum dolor sit amet 6" },
    { desc: "Lorem ipsum dolor sit amet 7" },
    { desc: "Lorem ipsum dolor sit amet 8" },
    { desc: "Lorem ipsum dolor sit amet 9" },
    { desc: "Lorem ipsum dolor sit amet 10" },
    { desc: "Lorem ipsum dolor sit amet 11" },
    { desc: "Lorem ipsum dolor sit amet 12" },
    { desc: "Lorem ipsum dolor sit amet 13" },
    { desc: "Lorem ipsum dolor sit amet 14" },
    { desc: "Lorem ipsum dolor sit amet 15" },
    { desc: "Lorem ipsum dolor sit amet 16" },
    { desc: "Lorem ipsum dolor sit amet 17" },
    { desc: "Lorem ipsum dolor sit amet 18" },
    { desc: "Lorem ipsum dolor sit amet 19" },
    { desc: "Lorem ipsum dolor sit amet 20" },
  ];
  function createBoxes(rowId) {
    const row = document.getElementById(rowId);
    contentOfBoxes.forEach((element) => {
      const box = document.createElement("div");
      box.classList.add(
        "p-4",
        "box",
        "w-72",
        "h-24",
        "mx-2",
        "flex",
        "text-white",
        "rounded-lg",
        "bg-[#1a1a1a]",
        "items-center",
        "cursor-pointer",
        "justify-center",
        "hover:underline",
      );
      box.textContent = element.desc;
      row.appendChild(box);
    });
  }
  createBoxes("row1");
  createBoxes("row2");
  createBoxes("row3");

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



// Starting of the file!
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
const boxData = [
  {
    title: "Writes, brainstorms, edits,",
    subtitle: "and explores ideas with you",
    imageSrc: "images/boxes/box1.webp",
    SmallImageSrc:"images/boxes/Box1-mobile.webp"
  },
  {
    title: "Summarize meetings. Find new",
    subtitle: "insights. Increase productivity.",
    imageSrc: "images/boxes/box2.webp",
    SmallImageSrc:"images/boxes/Box2-mobile.webp"
  },
  {
    title: "Generate and debug code. Automate",
    subtitle: "repetitive tasks. Learn new APIs.",
    imageSrc: "images/boxes/box3.webp",
    SmallImageSrc:"images/boxes/Box3-mobile.webp"
  },
  {
    title: "Learn something new. Dive into a.",
    subtitle: "hobby. Answer complex questions",
    imageSrc: "images/boxes/box4.webp",
    SmallImageSrc:"images/boxes/Box4-mobile.webp"
  }
];
function screenRes(){
  const isMobile = window.matchMedia("(max-width:786px)").matches;
  const images = document.querySelectorAll(".box-img img");
  images.forEach((img,index)=>{
    if (isMobile && boxData[index].SmallImageSrc) {
      img.src = boxData[index].SmallImageSrc; 
    } else {
      img.src = boxData[index].imageSrc; 
    }
  })
}
window.addEventListener("load", screenRes);
window.addEventListener("resize", screenRes);

const containerIdeas = document.querySelector('.IdeasContainer');

boxData.forEach((box, index) => {
  const boxElement = document.createElement('div');
  boxElement.classList.add(`box${index + 1}`, 'bg-black');
  
  boxElement.innerHTML = `
    <div class="content text-center ${index > 0 ? 'mt-0 sm:mt-24' : ''}">
      <h1 class="text-3xl md:text-3xl px-2 pt-4 text-balance mb-8 font-[inter] font-medium  ">
        ${box.title}
        <span class="block">${box.subtitle}</span>
      </h1>
      <p class="hover:border-b inline">Learn more about writing with ChatGPT ></p>
    </div>
    <div class="box-img flex justify-center items-center w-full px-6 sm:px-16 lg:px-32 mt-6 p-10  ">
      <img src="${box.imageSrc}" class="w-full max-w-5xl h-full object-cover rounded-lg" alt="" />
    </div>
  `;

  containerIdeas.appendChild(boxElement);
});

const remainingBoxesData = [
  {
    title: "Type, talk, and use it your way",
    description: [
      "With ChatGPT, you can type or start a real-time voice conversation by tapping the soundwave icon in the mobile app"
    ],
    imageSrc: "images/boxes/bxo7.webp",
    link: null,
  },
  {
    title: "Search the web",
    description: [
      "Click the web search icon to get fast, timely answers with links to relevant web sources."
    ],
    imageSrc: "images/boxes/box11.webp",
    link: { text: "Learn more", url: "#" },
  },
  {
    title: "Analyze data and create charts",
    description: [
      "Upload a file and ask ChatGPT to help analyze data, summarize information or create a chart."
    ],
    imageSrc: "images/boxes/bxo7.webp",
    link: null,
  },
  {
    title: "Talk about an image",
    description: ["Take or upload an image and ask ChatGPT about it."],
    imageSrc: "images/boxes/bxo7.webp",
    link: null,
  },
  {
    title: "Tackle hard problems with deep reasoning",
    description: [
      "OpenAI o1 is trained to spend more time thinking before responding and reasons through complex questions across fields like math, science, and coding.",
    ],
    imageSrc: "images/boxes/box11.webp",
    link: { text: "Introducing OpenAi o1 >", url: "#" },
  },
  {
    title: "Create images",
    description: [
      "Ask ChatGPT to create images using a simple sentence or detailed paragraph.",
    ],
    imageSrc: "images/boxes/bxo7.webp",
    link: null,
  },
  {
    title: "Apple & ChatGPT",
    description: [
      "At WWDC in June 2024, we announced a partnership with Apple to integrate ChatGPT into experiences within iOS, iPadOS, and macOS.",
    ],
    imageSrc: "images/boxes/box11.webp",
    link: { text: "Learn more", url: "#" },
  },
];

const remainingBoxesContainer = document.querySelector('.remainingBoxes');

remainingBoxesData.forEach((box, index) => {
  const boxElement = document.createElement('div');
  boxElement.classList.add('leftRightbox','max-w-5xl','mx-auto', 'w-full', 'bg-black','grid','sm:grid-cols-2','md:grid-cols-2','lg:grid-cols-2', 'rounded-lg', 'overflow-hidden', 'pb-20');


  const descriptionHTML = box.description
    .map((line) => `<span class="block">${line}</span>`)
    .join("");

  const linkHTML = box.link
    ? `<a href="${box.link.url}" class="pt-6 text-lg underline">${box.link.text}</a>`
    : "";

  boxElement.innerHTML = `
    <div class="leftBox bg-[#161616]  flex justify-center  flex-col text-left items-start py-8 px-6 sm:px-14 text-white">
      <h1 class="text-xl sm:text-3xl pb-8 font-semibold">${box.title}</h1>
      <p class="text-lg font-medium">${descriptionHTML}</p>
      ${linkHTML}
    </div>
    <div class="rightBox flex justify-center items-center text-white">
      <img src="${box.imageSrc}" alt="" class="h-full object-cover" />
    </div>
  `;

  if (index === 4 || index === 6) {
    const leftBox = boxElement.querySelector(".leftBox");
    if (leftBox) {
      const screenWidth = window.innerWidth;
  
      leftBox.classList.remove("h-[600px]", "h-[350px]", "h-[450px]");
  
      if (screenWidth <= 700) {
        leftBox.classList.add("h-[450px]");
      } else if (screenWidth <= 1024) {
        leftBox.classList.add("h-[450px]");
      } else {
        leftBox.classList.add("h-[600px]");
      }
    }
  }
  
  
  remainingBoxesContainer.appendChild(boxElement);
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
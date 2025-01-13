// Starting of the file!
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
      <div class="box-img flex justify-center items-center w-full sm:px-16 lg:px-32 mt-6 p-10  ">
        <img src="${box.imageSrc}" class="w-full max-w-5xl h-[600px] object-cover rounded-lg" alt="" />
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
    boxElement.classList.add('leftRightbox','max-w-6xl','mx-auto', 'w-full', 'bg-black','grid','sm:grid-cols-1','md:grid-cols-2','lg:grid-cols-2', 'rounded-xl', 'overflow-hidden', 'pb-28');
  
    const descriptionHTML = box.description
      .map((line) => `<span class="block">${line}</span>`)
      .join("");
  
    const linkHTML = box.link
      ? `<a href="${box.link.url}" class="pt-6 text-lg underline">${box.link.text}</a>`
      : "";
  
    boxElement.innerHTML = `
      <div class="leftBox bg-[#161616]  flex justify-center  flex-col text-left items-start px-6 sm:px-14 text-white">
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
        leftBox.classList.add("h-[650px]"); 
      }
    }
    remainingBoxesContainer.appendChild(boxElement);
  });
  



 
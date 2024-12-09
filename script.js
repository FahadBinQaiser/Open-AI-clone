// Starting of the file!
const boxData = [
    {
      title: "Writes, brainstorms, edits,",
      subtitle: "and explores ideas with you",
      imageSrc: "images/boxes/box1.webp"
    },
    {
      title: "Summarize meetings. Find new",
      subtitle: "insights. Increase productivity.",
      imageSrc: "images/boxes/box2.webp"
    },
    {
      title: "Generate and debug code. Automate",
      subtitle: "repetitive tasks. Learn new APIs.",
      imageSrc: "images/boxes/box3.webp"
    },
    {
      title: "Learn something new. Dive into a.",
      subtitle: "hobby. Answer complex questions",
      imageSrc: "images/boxes/box4.webp"
    }
  ];

  const containerIdeas = document.querySelector('.IdeasContainer');

  boxData.forEach((box, index) => {
    const boxElement = document.createElement('div');
    boxElement.classList.add(`box${index + 1}`, 'bg-black');
    
    boxElement.innerHTML = `
      <div class="content text-center ${index > 0 ? 'mt-32' : ''}">
        <h1 class="text-4xl mb-8 font-[inter] font-medium">
          ${box.title}
          <span class="block">${box.subtitle}</span>
        </h1>
        <p class="hover:border-b inline">Learn more about writing with ChatGPT ></p>
      </div>
      <div class="image flex justify-center items-center w-full p-32 mt-14 border-white h-[718px]">
        <img src="${box.imageSrc}" class="w-[1096px] rounded-lg" alt="" />
      </div>
    `;

    containerIdeas.appendChild(boxElement);
  });
  
  const remainingBoxesData = [
    {
      title: "Type, talk, and use it your way",
      description: [
        "With ChatGPT, you can type or start a real-time",
        "voice conversation by tapping the soundwave icon",
        "in the mobile app.",
      ],
      imageSrc: "images/boxes/bxo7.webp",
      link: null,
    },
    {
      title: "Search the web",
      description: [
        "Click the web search icon to get fast, timely",
        "answers with links to relevant web sources.",
      ],
      imageSrc: "images/boxes/box11.webp",
      link: { text: "Learn more", url: "#" },
    },
    {
      title: "Analyze data and create charts",
      description: [
        "Upload a file and ask ChatGPT to help analyze",
        "data, summarize information or create a chart.",
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
  
  remainingBoxesData.forEach((box) => {
    const boxElement = document.createElement('div');
    boxElement.classList.add('leftRightbox', 'w-full', 'h-auto', 'bg-black', 'grid','grid-cols-2', 'rounded-lg', 'overflow-hidden',"mb-28");
  
    const descriptionHTML = box.description
      .map((line) => `<span class="block">${line}</span>`)
      .join("");
  
    const linkHTML = box.link
      ? `<a href="${box.link.url}" class="pt-6 text-lg underline">${box.link.text}</a>`
      : "";
  
    boxElement.innerHTML = `
      <div class="leftBox bg-[#161616] flex justify-center flex-col text-left items-start px-14 text-white">
        <h1 class="text-3xl pb-6 font-semibold">${box.title}</h1>
        <p class="text-lg">${descriptionHTML}</p>
        ${linkHTML}
      </div>
      <div class="rightBox flex justify-center items-center text-white">
        <img src="${box.imageSrc}" alt="" class="h-full object-contain" />
      </div>
    `;
  
    remainingBoxesContainer.appendChild(boxElement);
  });
  
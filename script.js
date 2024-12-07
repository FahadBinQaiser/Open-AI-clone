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
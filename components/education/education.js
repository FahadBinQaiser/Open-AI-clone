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
      title: 'Expanded access to GPT-4o',
      description: 'Significantly higher message limits than the free version of ChatGPT. GPT-4o has improved language capabilities across quality and speed, with over 50 languages supported.',
  
    },
    {
      id: 'item2',
      title: 'Advanced capabilities for analysis and research',
      description: 'Tools like data analysis, web browsing, file integrations, and document summarization. ',
  
    },
    {
      id: 'item3',
      title: 'Customizable AI for any project or course',
      description: 'Create GPTs—custom versions of ChatGPT for specific projects, courses, or tasks, and share them with university workspaces.',
  
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
          </div>
        </div>
      `;
      contentContainer.insertAdjacentHTML('beforeend', sectionHTML);
    });
  } 
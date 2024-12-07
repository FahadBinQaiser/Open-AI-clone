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
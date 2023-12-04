import DropdownHTML from "./dropdown-template.html";

function CreateDropdown(title, ...items) {
  const dropContainer = document.createElement("div");
  dropContainer.classList.add("dropdown");
  dropContainer.innerHTML = DropdownHTML;

  const dropTitle = dropContainer.querySelector(".title");
  const dropListContainer = dropContainer.querySelector(".drop-list-inner");
  const dropList = dropContainer.querySelector(".drop-list");

  dropTitle.textContent = title;

  items.forEach((item) => {
    const dropItem = document.createElement("li");
    dropItem.classList.add("drop-item");
    dropItem.textContent = item;
    dropList.appendChild(dropItem);
  });

  dropContainer.addEventListener("mouseover", () => {
    dropListContainer.classList.remove("hidden");
    console.log("hovering");
  });

  dropContainer.addEventListener("mouseout", () => {
    dropListContainer.classList.add("hidden");
    console.log("hovering");
  });

  return dropContainer;
}

export default CreateDropdown;

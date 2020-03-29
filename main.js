const inputSearch = document.querySelector("body input.search");
const ul = document.querySelector("ul");

const form = document.querySelector("form");
const inputAdd = document.querySelector("form input.add");
const taskNumber = document.querySelector("h1 span");
let liElements = document.querySelectorAll("li");

const addTask = e => {
  e.preventDefault();
  const tileTask = inputAdd.value;
  const task = document.createElement("li");
  task.innerHTML = tileTask + '<button class= "delete">usuń</button>';
  ul.appendChild(task);
  inputAdd.value = "";

  const deleteBtn = document.querySelectorAll("button.delete");

  deleteBtn.forEach(element => {
    element.addEventListener("click", removeTask);
  });
  updateNumber();
};

const removeTask = e => {
  e.target.parentNode.remove();

  updateNumber();
};

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  const liArray = [...liElements];
  const liList = liArray.filter(element =>
    element.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  liList.forEach(li => ul.appendChild(li));
};

const updateNumber = () => {
  liElements = document.querySelectorAll("li");
  taskNumber.textContent = liElements.length;
};

inputSearch.addEventListener("input", searchTask);

form.addEventListener("submit", addTask);

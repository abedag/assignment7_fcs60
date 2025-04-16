const input = document.querySelector(".task-input");
const button = document.querySelector(".add-btn");
const list = document.querySelector(".task-list");

button.addEventListener("click", function () {
  const taskText = input.value

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  list.appendChild(li);

  input.value = "";
})

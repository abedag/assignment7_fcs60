const input = document.querySelector(".task-input"); // Text box
const button = document.querySelector(".add-btn");   // Add Task button
const list = document.querySelector(".task-list");   // <ul> where tasks go

button.addEventListener("click", function () {
  const taskText = input.value

  if (taskText === "") return; // Do nothing if input is empty

  const li = document.createElement("li");
  li.textContent = taskText; // Add the task text to the <li>

  li.addEventListener("click", function () {
    li.classList.toggle("completed"); // Toggle the 'completed' style
  });

  list.appendChild(li); // Add <li> to list

  input.value = ""; // Clear input box
})

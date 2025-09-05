const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task");
const dateInput = document.getElementById("date");
const todoList = document.getElementById("todo-list");
const filterDateInput = document.getElementById("filter-date");

let todos = [];
// Add Task
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = taskInput.value;
  const date = dateInput.value;

  todos.push({ task, date });
  renderTodos(todos);

  taskInput.value = "";
  dateInput.value = "";
});

// Render Tasks
function renderTodos(list) {
  todoList.innerHTML = "";
  list.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <span>${todo.task} <span class="date">(${todo.date})</span></span>
          <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
    todoList.appendChild(li);
  });
}

// Delete Task
function deleteTask(index) {
  todos.splice(index, 1);
  renderTodos(todos);
}

// Filter Tasks
function filterTasks() {
  const filterDate = filterDateInput.value;
  if (filterDate) {
    const filtered = todos.filter((todo) => todo.date === filterDate);
    renderTodos(filtered);
  }
}

// Show All Tasks
function showAll() {
  renderTodos(todos);
}

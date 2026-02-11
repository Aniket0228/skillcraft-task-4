const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  const dateTime = taskDate.value;

  if (!text) return alert("Please enter a task");

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="top-row">
      <span class="task-text">${text}</span>
      <div class="actions">
        <button class="completeBtn">✓</button>
        <button class="editBtn">✎</button>
        <button class="deleteBtn">🗑</button>
      </div>
    </div>
    <div class="date-time">${dateTime ? dateTime : ""}</div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";

  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.classList.toggle("complete");
  });

  li.querySelector(".deleteBtn").addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.querySelector(".editBtn").addEventListener("click", () => {
    const newText = prompt("Edit task", text);
    if (newText) {
      li.querySelector(".task-text").textContent = newText;
    }
  });
}

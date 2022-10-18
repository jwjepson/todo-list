import "./styles.css";
import {Task} from "./todos";

const defaultTasks = [];

function renderTasks() {
    const todoItems = document.querySelector(".todo-items");
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        task.remove();
    })
    defaultTasks.reverse().forEach((task) => {
        const li = document.querySelector(".task-template").cloneNode(true);
        const docFrag = document.createDocumentFragment();
        li.querySelector(".task-title").textContent = task.title;
        li.querySelector(".task-description").textContent = task.description;
        li.querySelector(".task-dueDate").textContent = task.dueDate;
        li.style.display = "flex";
        li.classList.remove("task-template");
        li.classList.add("task");
        docFrag.appendChild(li);
        todoItems.appendChild(docFrag);
    });
}

const submitTaskButton = document.querySelector("#submit-task-button");
submitTaskButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#date").value;
    const priority = document.querySelector("input[name=priority]:checked").value;
    const task = new Task(title, description, dueDate, priority);
    defaultTasks.push(task);
    taskForm.style.display = "none";
    taskOverlay.style.display = "none";
    renderTasks();
})






// Displaying the Add Task popup
const addTaskButton = document.querySelector(".add-task");
const taskForm = document.querySelector(".add-task-form");
const taskOverlay = document.querySelector(".opacity-cover");

addTaskButton.addEventListener("click", () => {
    taskForm.style.display = "block";
    taskOverlay.style.display = "block";
});

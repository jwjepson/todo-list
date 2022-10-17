import "./styles.css";
import {Task} from "./todos";

const defaultTasks = [];

const task1 = new Task("Test Task", "This is a test Task", "10/27/2022", "high");
defaultTasks.push(task1);

const todoItems = document.querySelector(".todo-items");

defaultTasks.forEach((task) => {
    const el = document.createElement("li");
    el.textContent = task.description;
    todoItems.appendChild(el);
});

const addTaskButton = document.querySelector(".add-task");
const taskForm = document.querySelector(".add-task-form");
const taskOverlay = document.querySelector(".opacity-cover");

addTaskButton.addEventListener("click", () => {
    taskForm.style.display = "block";
    taskOverlay.style.display = "block";
});

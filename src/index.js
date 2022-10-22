import "./styles.css";
import {Task} from "./todos";
import {markComplete} from "./complete";
import {editTask} from "./edit";
import {deleteTask} from "./delete";

const defaultTasks = [];


// Clear from DOM
function clearTasks() {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        task.remove();
    });
};

function setPriorityColor(priority) {
    if (priority == "Low") {
        return "#59981A";
    }
    else if (priority == "Medium") {
        return "#FFAC1C";
    }
    else {
        return "#FC0E0E";
    }
};

// Render all the tasks inside array
function renderTasks() {
    const todoItems = document.querySelector(".todo-items");
    clearTasks();
    defaultTasks.forEach((task, index) => {
        const li = document.querySelector(".task-template").cloneNode(true);
        const docFrag = document.createDocumentFragment();
        li.querySelector(".task-title").textContent = task.title;
        li.querySelector(".task-description").textContent = task.description;
        li.querySelector(".task-dueDate").textContent = task.dueDate;
        li.querySelector(".task-priority").textContent = task.priority;
        li.querySelector(".task-priority").style.backgroundColor = setPriorityColor(task.priority);
        li.querySelector(".task-complete-button").addEventListener("click", markComplete);
        li.querySelector("#edit-button").addEventListener("click", editTask);
        li.querySelector("#delete-button").addEventListener("click", deleteTask);
        li.style.display = "flex";
        li.className = "task";
        if (task.status == "complete") {
            li.classList.add("complete");
            li.querySelector(".task-complete-button").classList.add("checked");
        }
        li.dataset.index = index;
        docFrag.appendChild(li);
        todoItems.appendChild(docFrag);
    });
}

// Displaying the Add Task popup

const addTask = document.querySelector(".add-task");
const taskForm = document.querySelector(".add-task-form");
const taskOverlay = document.querySelector(".opacity-cover");
const form = document.querySelector("form");

addTask.addEventListener("click", () => {
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "Add Task";
    addTaskButton.setAttribute("type", "button");
    addTaskButton.addEventListener("click", () => {
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#date").value;
        const priority = document.querySelector("input[name=priority]:checked").value;
        const task = new Task(title, description, dueDate, priority, "incomplete");
        defaultTasks.push(task);
        taskForm.style.display = "none";
        taskOverlay.style.display = "none";
        renderTasks();
        form.reset();
        addTaskButton.remove();
    })
    form.appendChild(addTaskButton);
    taskForm.style.display = "block";
    taskOverlay.style.display = "block";
});

export {defaultTasks, renderTasks};

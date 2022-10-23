import {defaultTasks} from "./index";
import {setPriorityColor} from "./index";
import {markComplete} from "./complete";
import {editTask} from "./edit";
import {deleteTask} from "./delete";


function renderTasks(task, index) {
    const todoItems = document.querySelector(".todo-items");
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
};

export {renderTasks};
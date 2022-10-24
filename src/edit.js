import {defaultTasks, renderAllTasks} from "./index";
import {populateProjects} from "./addProject";


function editTask() {
    const task = defaultTasks[this.parentNode.parentNode.getAttribute("data-index")];
    const taskForm = document.querySelector(".add-task-form");
    const taskOverlay = document.querySelector(".opacity-cover");
    const form = document.querySelector("form");

    // Display Form and fill in task data
    taskForm.style.display = "block";
    taskOverlay.style.display = "block";
    document.querySelector("#title").value = task.title;
    document.querySelector("#description").value = task.description;
    document.querySelector("#date").value = task.dueDate;
    document.querySelector(`#${task.priority}-priority`).checked = true;
    populateProjects();
    document.querySelector("#projects").value = task.project;
    
    // Create Edit Button
    const addTaskButton = document.querySelector(".add-task-button");
    if (addTaskButton) {
        addTaskButton.remove();
    }
    const editTaskButton = document.createElement("button");
    editTaskButton.classList.add("edit-task-button");
    editTaskButton.setAttribute("type", "button");
    editTaskButton.textContent = "Edit";
    form.appendChild(editTaskButton);

    // Update task and display
    editTaskButton.addEventListener("click", () => {
        task.title = document.querySelector("#title").value;
        task.description = document.querySelector("#description").value;
        task.dueDate = document.querySelector("#date").value;
        task.priority = document.querySelector("input[name=priority]:checked").value;
        task.project = document.querySelector("#projects").value;
        taskForm.style.display = "none";
        taskOverlay.style.display = "none";
        editTaskButton.remove();
        form.reset();
        renderAllTasks();
    });
}

export {editTask};
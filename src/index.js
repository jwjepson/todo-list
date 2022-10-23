import "./styles.css";
import {Task} from "./todos";
import {isToday, parseISO, isThisWeek, isFuture} from 'date-fns'
import {renderTasks} from "./renderTasks";

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
function renderAllTasks() {
    clearTasks();
    defaultTasks.forEach((task, index) => {
        renderTasks(task, index);
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
        renderAllTasks();
        form.reset();
        addTaskButton.remove();
    })
    form.appendChild(addTaskButton);
    taskForm.style.display = "block";
    taskOverlay.style.display = "block";
});

const allTasks = document.querySelector(".all-tasks");
allTasks.addEventListener("click", () => {
    renderAllTasks();
});

const todaysTasks = document.querySelector(".todays-tasks");
todaysTasks.addEventListener("click", renderTodaysTasks);

const upcomingTasks = document.querySelector(".upcoming-tasks");
upcomingTasks.addEventListener("click", renderUpcomingTasks);


function renderTodaysTasks() {
    clearTasks();
    defaultTasks.forEach((task, index) => {
        if (isToday(parseISO(task.dueDate))) {
            renderTasks(task, index);
        }
    })
}

function renderUpcomingTasks() {
    clearTasks();
    defaultTasks.forEach((task, index) => {
        if (isFuture(parseISO(task.dueDate))) {
            renderTasks(task, index);
        }
    });
}

export {defaultTasks, renderAllTasks, setPriorityColor};

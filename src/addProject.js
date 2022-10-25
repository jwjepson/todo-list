import { defaultTasks, clearTasks, switchTab } from "./index";
import { renderTasks } from "./renderTasks";

const projects = JSON.parse(localStorage.getItem("projects")) || [];

function createAddButton(button) {
    button.innerHTML = "";
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("type", "button");
    addProjectButton.setAttribute("id", "add-project");
    addProjectButton.textContent = "Add Project";
    addProjectButton.addEventListener("click", addProject);
    button.appendChild(addProjectButton);
}

function renderProject(e) {
    clearTasks();
    defaultTasks.forEach((task, index) => {
        if (task.project == e.target.innerText) {
            renderTasks(task, index);
        };
    });
}

function populateProjects() {
    const projects_ul = document.querySelector("#projects");
    const defaultProject = document.createElement("option");
    defaultProject.value = "Default";
    defaultProject.textContent = "Default";
    projects_ul.innerHTML = "";
    projects_ul.appendChild(defaultProject);
    projects.forEach((project) => {
        const option_el = document.createElement("option");
        option_el.value = project;
        option_el.innerText = project;
        projects_ul.appendChild(option_el);
    });
};


function addProject(e) {
    const projectButton = e.target.parentElement;
    const projectList = document.querySelector(".projects");

    e.target.remove();

    const projectInput = document.createElement("input");
    projectInput.classList.add("projectInput");
    projectInput.placeholder = "Project Name";

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.textContent = "Add";
    addButton.classList.add("add-button");
    addButton.addEventListener("click", () => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("project");
        if (!projectInput.value == "") {
            projectItem.textContent = projectInput.value;
            projects.push(projectInput.value);
            localStorage.setItem("projects", JSON.stringify(projects));
            projectList.appendChild(projectItem);
            projectItem.addEventListener("click", renderProject);
            projectItem.addEventListener("click", switchTab);
            projectInput.value = "";
            createAddButton(projectButton);
        };
    });

    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-button");
    cancelButton.addEventListener("click", () => {
        createAddButton(projectButton);
    })

    projectButton.appendChild(projectInput);
    projectButton.appendChild(addButton);
    projectButton.appendChild(cancelButton);
}

export {addProject, projects, populateProjects, renderProject};
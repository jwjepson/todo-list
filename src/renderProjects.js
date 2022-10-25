import {projects} from "./addProject";
import {renderProject} from "./addProject";
import {switchTab} from "./index";

function renderProjects() {
    const projectList = document.querySelector(".projects");
    projects.forEach((project) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("project");
        projectItem.textContent = project;
        projectItem.addEventListener("click", renderProject);
        projectItem.addEventListener("click", switchTab);
        projectList.appendChild(projectItem);
    });
}

export {renderProjects};
function createAddButton(button) {
    button.innerHTML = "";
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("type", "button");
    addProjectButton.setAttribute("id", "add-project");
    addProjectButton.textContent = "Add Project";
    addProjectButton.addEventListener("click", addProject);
    button.appendChild(addProjectButton);
}


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
            projectList.appendChild(projectItem);
            projectInput.value = "";
            createAddButton(projectButton);
        };
    });

    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-button");

    projectButton.appendChild(projectInput);
    projectButton.appendChild(addButton);
    projectButton.appendChild(cancelButton);
}

export {addProject};
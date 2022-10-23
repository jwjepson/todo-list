function addProject(e) {
    const projectList = e.target.parentElement;
    e.target.remove();

    const projectInput = document.createElement("input");
    projectInput.classList.add("projectInput");
    projectInput.placeholder = "Project Name";

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.textContent = "Add";
    addButton.classList.add("add-button");

    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-button");

    projectList.appendChild(projectInput);
    projectList.appendChild(addButton);
    projectList.appendChild(cancelButton);
}

export {addProject};
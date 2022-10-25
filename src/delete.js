import {defaultTasks, renderAllTasks} from "./index";


function deleteTask() {
    defaultTasks.splice(this.parentNode.parentNode.getAttribute("data-index"), 1);
    localStorage.setItem("defaultTasks", JSON.stringify(defaultTasks));
    renderAllTasks();
}

export {deleteTask};
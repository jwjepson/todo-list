import {defaultTasks, renderAllTasks} from "./index";


function deleteTask() {
    defaultTasks.splice(this.parentNode.parentNode.getAttribute("data-index"), 1);
    renderAllTasks();
}

export {deleteTask};
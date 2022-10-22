import {defaultTasks, renderTasks} from "./index";


function deleteTask() {
    defaultTasks.splice(this.parentNode.parentNode.getAttribute("data-index"), 1);
    renderTasks();
}

export {deleteTask};
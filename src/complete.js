import {defaultTasks} from "./index";

function markComplete() {
    const task = defaultTasks[this.parentNode.parentNode.getAttribute("data-index")];
    const taskButton = this;

    if (task.status == "incomplete") {
        task.status = "complete";
        taskButton.classList.add("checked");
    }
    else {
        task.status = "incomplete";
        taskButton.classList.remove("checked");
        
    }
}

export {markComplete};
import {defaultTasks} from "./index";

function markComplete() {
    const task = defaultTasks[this.parentNode.parentNode.getAttribute("data-index")];
    const task_el = this.parentNode.parentNode;
    const taskButton = this;

    if (task.status == "incomplete") {
        task.status = "complete";
        taskButton.classList.add("checked");
        task_el.classList.add("complete");
    }
    else {
        task.status = "incomplete";
        taskButton.classList.remove("checked");
        task_el.classList.remove("complete");       
    }
}

export {markComplete};
function markComplete(button) {
    if (button.classList.contains("checked")) {
        button.classList.remove("checked");
    }
    else {
        button.classList.add("checked");
        
    }
}

export {markComplete};
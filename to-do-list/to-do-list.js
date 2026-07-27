function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    let li = document.createElement("li");

    li.innerHTML = taskText;

    document.getElementById("taskList").appendChild(li);

}
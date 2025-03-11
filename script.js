let tasks = []; // Empty array to store tasks

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task); // Add task to array
    taskInput.value = ""; // Clear input field
    displayTasks();
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous list

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks();
}

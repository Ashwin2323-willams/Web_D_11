<!DOCTYPE html>
<html>
<head>
<title>To-Do List</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<h1>My To-Do List</h1>
<input type="text" id="taskInput" placeholder="Enter a task">
<button onclick="addTask()">Add Task</button>
<ul id="taskList"></ul>
</div>
<script src="script.js"></script>
</body>
</html>
style.css
body {
font-family: Arial, sans-serif; background-color: #f4f4f4; display: flex;
justify-content: center; align-items: center; min-height: 100vh;
}
.container { width: 500px; padding: 30px;
background: white; border-radius: 10px; text-align: center;
}
h1 {
font-size: 32px;
}
input {
width: 300px; padding: 12px; font-size: 16px;
}

button {
padding: 10px 15px;
 
font-size: 16px; cursor: pointer;
}
li {
font-size: 18px; padding: 8px;
}

script.js
function addTask() {
var input = document.getElementById("taskInput"); var task = input.value.trim();
if (task === "") { alert("Please enter a task"); return;
}

var li = document.createElement("li"); li.textContent = task;
// Click a task to mark it as completed li.onclick = function () {
li.classList.toggle("completed");
};

// Create a delete button
var deleteButton = document.createElement("button"); deleteButton.textContent = "Delete"; deleteButton.onclick = function (event) {
event.stopPropagation(); li.remove();
};
li.appendChild(deleteButton); document.getElementById("taskList").appendChild(li); input.value = "";
}


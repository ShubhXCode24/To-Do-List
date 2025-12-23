// Access all Elements
const inputBox = document.querySelector("#input-box");
const myButton = document.querySelector(".add-btn");
const listContainer = document.querySelector("#list-container");



// addTask Function
function addTask() {
    if(inputBox.value === '') {
        alert("Input Cannot be Empty. Please enter a Task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Delete Button
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "❌"
        li.appendChild(deleteBtn);
        
        
        inputBox.value = "";
        saveTask()
    }
}

//Check Or Delete Task
listContainer.addEventListener("click", function(evt) {
    if(evt.target.tagName === "LI") {
        evt.target.classList.toggle("checked");
        saveTask()
    } 
    else if(evt.target.tagName === "SPAN") {
        evt.target.parentElement.remove();
        saveTask()
    }
})

 
// Save Data to LocalStorage
function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load List When Page Opens
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


// Enter Key Press
inputBox.addEventListener("keyup", function(e){
    if(e.key === "Enter") {
        addTask();
    }
});
// DOM Events
const addButton = document.querySelector(".addBtn")
const todoTasksDiv = document.querySelector(".todoTasksDiv")
const todoInput = document.querySelector(".todoInput")

// Event Listeners
addButton.addEventListener("click", addTask);
todoTasksDiv.addEventListener("click", modifyTask);

// Functions
function addTask(event){
  event.preventDefault();

  if(todoInput.value === ""){
    alert("Please Enter the Task Details❤️");
    return;
  }
  //create Tags:
  const todoTaskDiv = document.createElement("div");
  const modifyButton = document.createElement("button");
  modifyButton.innerHTML = "<i class='fas fa-pen-to-square'></i>"
  const todoTaskListLi = document.createElement("li");
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>"
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-minus'></i>"

  //add Classes
  todoTaskDiv.classList.add("todoTask")
  modifyButton.classList.add("modifyBtn")
  todoTaskListLi.classList.add("todoTaskList")
  completedButton.classList.add("completedBtn")
  deleteButton.classList.add("deleteBtn")

  //add value to task 
    todoTaskListLi.innerText = todoInput.value;

  //add to List
    todoTaskDiv.appendChild(modifyButton)
    todoTaskDiv.appendChild(todoTaskListLi);
    todoTaskDiv.appendChild(completedButton);
    todoTaskDiv.appendChild(deleteButton);
    todoTasksDiv.appendChild(todoTaskDiv);

    // Making Todo Input Blank
    todoInput.value = "";

}

function modifyTask(event){
  const item = event.target
  const parent = item.parentElement;
  if(item.classList[0] === "deleteBtn"){
    parent.remove();
  }
  if(item.classList[0] === "completedBtn"){
    parent.children[1].classList.toggle("completed");
  }
  if(item.classList[0] === "modifyBtn"){
      const newValue = prompt("Provide modified Task details");
      if(newValue === ""){
        alert("Please Enter the Task Details❤️")
        return;
      }
      parent.children[1].innerText = newValue;
  }
}


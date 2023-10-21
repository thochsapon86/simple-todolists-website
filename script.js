function addTaskList() {
    let inputTask = document.getElementById("inputTask").value
    let todoList = document.getElementById("todo-list")
    console.log(inputTask)
    todoList.innerHTML +=
    "<li id='list'>" + "<input type='checkbox'></input>" + inputTask + 
    "<button id='removeBtn' onclick='remove()'>remove</button>" +
    "</li>" +
    "<div class='divider'></div>"

}

function remove() {
    let todoList = document.getElementById("todo-list")
    let removeBtn = getElementById("removeBtn")
    list.innerHTML = ""
    removeBtn.innerHTML = ""
}
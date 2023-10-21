function addTaskList() {
    let inputTask = document.getElementById("inputTask").value
    let todoList = document.getElementById("todo-list")

    if ( inputTask != "") {
        console.log(inputTask)
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type='checkbox'> ${inputTask}<button>remove</button>`;
        const deleteButton = listItem.querySelector("button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        todoList.appendChild(listItem);

        document.getElementById("inputTask").value = ""
    } 
    else {
        alert("Please Enter Task!")
        document.getElementById("inputTask").value = ""
    }
}

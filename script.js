function addTaskList() {
    let inputTask = document.getElementById("inputTask").value
    let todoList = document.getElementById("todo-list")

    if ( inputTask != "") {
        console.log(inputTask)
        //สร้าง list 
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type='checkbox'> ${inputTask}<button>remove</button>`;
        //ลบ list
        const deleteButton = listItem.querySelector("button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
        //แสดง list
        todoList.appendChild(listItem);
        //ทำให้ค่า input ว่าง
        document.getElementById("inputTask").value = ""
    } 
    else {
        alert("Please Enter Task!")
        document.getElementById("inputTask").value = ""
    }
}

function addTodo() {
    var todoInput = document.getElementById("new-todo");
    var todoList = document.getElementById("todo-list");


    var todolist = []; //create an empty array to store new to-do item.
    todolist.push(todoInput.value);

    //create a new list item 

    var newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value;

    //create delete button for new list item
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");

//append delete button to new list item
newtodo.appendChild(deleteButton);

    //add the new list item to todo list
    todoList.appendChild(newtodo);

    //clear the input field by set the input to an empty string
    todoInput.value = "";

    deleteButton.addEventListener("click", function () {
        newtodo.remove();
    });

} 
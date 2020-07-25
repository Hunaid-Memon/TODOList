var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
    

    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("Class","item")
    li.appendChild(liText);

    //create del button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("REMOVE");
    delBtn.setAttribute("Class","btn btn-D");
    //delBtn.setAttribute("Class","btn-DI");
    delBtn.setAttribute("onclick","removeItem(this)");
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("Class","btn btn-I");
    //editBtn.setAttribute("Class","btn-DI");
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)


    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
   
    todo_item.value = "";
   


}

function removeItem(e){
    e.parentNode.remove();
}

function removeAll(){
    list.innerHTML = ''
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val);
    e.parentNode.firstChild.nodeValue = editValue;
}


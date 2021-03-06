// 4.	Se face update de un todo - check/uncheck
// •	utilizatorul poate sa faca check si uncheck din UI la un todo item
// •	folosim PUT http://localhost:3000/todos/:id + body

function createCheckButton(todo){
    const checkButton = document.createElement("input")
    checkButton.type = "checkbox";
    checkButton.classList.add("checkboxes");

    if(todo.completed === false){
        checkButton.checked = false;

        checkButton.onclick = function(){
            updateTodo(todo, false).then()
            checkButton.checked = true;
        }
    }
    if(todo.completed === true){
        checkButton.checked = true;

        checkButton.onclick = function(){
            updateTodo(todo, true).then()
            checkButton.checked = false;
        }
    }
    return checkButton;
}
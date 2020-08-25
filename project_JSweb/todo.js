const toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList");




const TODO_LS = 'todo';

let toDos = [];

// function doneTodo(event){
//     span.style.setProperty("text-decoration","line-through");
//     // let span = event.target.parentNode.childNodes[1];
//     // const newDoTos = strikeTarget.style.setProperty("text-decoration","line-through");
//     // console.log(strikeTarget);
//     // console.log(strikeTarget.childNodes[1]);
    
    
// }

function deleteToDo(event){
    const deleteTarget = event.target.parentNode;
    toDoList.removeChild(deleteTarget);
    const newToDos = toDos.filter(function(a){
        return a.id != deleteTarget.id;
    })

    toDos = newToDos;
    saveToDo();
}



function saveToDo(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

function paintStyle(thisstyle){
    console.log(thisstyle);
    // span = paintToDo.span;
    // span.innerHTML = thisstyle;
}

function paintToDo(text,linestyle){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const doneBtn = document.createElement("input");
    doneBtn.classList = "w3-check";
    doneBtn.type="checkbox"
    delBtn.innerHTML = "❌";
    
    delBtn.addEventListener("click", deleteToDo);
    doneBtn.addEventListener("click", doneTodo);
    let span = document.createElement("span");
    
    const newId = toDos.length + 1;
    span.innerText = text;
    span.style.textDecoration = linestyle;
    li.appendChild(doneBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    
    li.id = newId
    toDoList.appendChild(li);
    let newStyle = span.style.textDecoration;
    

    const toDoObj = {
        
        linestyle : newStyle,
        text : text,
        id : newId
    }

    function doneTodo(event){
        if (doneBtn.checked){
            span.style.setProperty("text-decoration","line-through");
            toDoObj.linestyle = span.style.textDecoration;
            saveToDo();
        }else{
            span.style.removeProperty("text-decoration");
            toDoObj.linestyle = span.style.textDecoration;
            saveToDo();
        }
        
       
          
    }   
    

    
    
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;

    paintToDo(currentValue);
    toDoInput.value = "";

}


function loadTodo(){

    const loadedTodo = localStorage.getItem(TODO_LS);
    if (loadedTodo != null){
        const parsedToDo = JSON.parse(loadedTodo);
        parsedToDo.forEach(function(a){
            paintToDo(a.text,a.linestyle);
            
            // paintStyle(a.thisstyle);
        });
    }


}


function init(){
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}



init();
const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function paintTodo(text){
    console.log(text);
    // document에 원하는것을 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText="❌";
    span.innerText = text;

    // (object).appandchild() : 부모 object 하위에 넣는 작업
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    li.id = newId;

    // to do 추가될 때마다 생성되는 Object
    const toDoObj ={
        text : text,
        id:newId
    }
    toDos.push(toDoObj);
}

function handleSubmit(event){
 event.preventDefault();
 const currentValue = toDoInput.value;
 paintTodo(currentValue);
 toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init ();
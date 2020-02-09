const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteTodo(event){
    const btn = event.target;   // delete 버튼 누른 대상
    const li = btn.parentNode; // delete 버튼의 상위 li element
    toDoList.removeChild(li);  // toDoList 엘리먼트 내에 있는 자식들중 li 삭제
    const cleanToDos = toDos.filter(function (toDo){
        // toDo에 있는 LocalStorage의 데이터중 현재 'X'버튼을 눌러 지우고자 하는 'X'를 제외한 나머지 데이터들만 리턴함.
        // 결과적으로 cleanToDos엔 지워진 List들만 남음
        return toDo.id !== parseInt(li.id);
        // parseInt(string) : string에 있는걸 number로 변경
    });
    // (Array).filter : pearl과 비슷. Array내용중 filter함수에 걸러져 나오는 것들만 필터링 거쳐 Array 형태로 Return
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){ // toDos 내용을 LocalStorage에 저장하는 함수
    // localStorage에는 JavaSctipt Data는 저장이 안된다.(Object 타입자체로는 저장이 안된다.) 오직 String만 저장 가능!!!
    // localStorage.setItem(TODOS_LS,toDos);

    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    // JSON.stringify : JavaScript Object를 string으로 변경해줌
}

function paintTodo(text){
    // document에 원하는것을 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; // 전체 갯수 +1
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteTodo);
    span.innerText = text; 

    // (object).appandchild() : 부모 object 하위에 넣는 작업
    li.appendChild(delBtn); // UI - li 밑에 에버튼 생성
    li.appendChild(span); // UI - li 밑에 영역 생성
    toDoList.appendChild(li); // toDoList 클래스 밑에 li를 생성

    li.id = newId; // li에 id 속성 생성

    // to do 추가될 때마다 생성되는 Object
    const toDoObj ={
        text : text,
        id:newId
    };
    toDos.push(toDoObj); // toDos 변수에 추가 Data 내용을 담은 생성
    saveToDos();
}

function handleSubmit(event){ //
 event.preventDefault(); // enter 누를때 새로고침하는 Default event를 없앰
 const currentValue = toDoInput.value;
 paintTodo(currentValue);
 toDoInput.value = ""; // 모든 작업 수행후 Input 값을 비움
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(todo){
            // forEach : array를 위한 function. Array의 값을 하나씩 꺼내서 Function에 돌림 (여기선 parsedToDos가 array)
    
            paintTodo(todo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init ();




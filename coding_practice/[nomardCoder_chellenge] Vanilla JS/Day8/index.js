const pendingHandle = document.querySelector("#pending-list"),
finishedHandle = document.querySelector("#finished-list"),
inputHandle = document.querySelector("input"),
form = document.querySelector(".taskForm");

const PENDING_LS="PENDING";
const FINISHIED_LS="FINISHIED";

let pendingList = [], finishedList = [];


function LsSave (){
    localStorage.setItem(PENDING_LS,JSON.stringify(pendingList));
    localStorage.setItem(FINISHIED_LS,JSON.stringify(finishedList));
}

function deleteTask(event){
    const btn = event.target;
    const li = btn.parentNode;
    const ul = li.parentNode;
    const taskNumber = li.id;

    ul.removeChild(li);

    
    const cleanPending = pendingList.filter(function(list){
        return list.id !== parseInt(taskNumber);
    });
    pendingList = cleanPending;


    const cleanfinished = finishedList.filter(function(list){
        return list.id!==parseInt(taskNumber);
    });
    finishedList= cleanfinished;
    LsSave();
}

function loadLsList(){
    const LoadPendingist = paintTask(pendingHandle,PENDING_LS);
    const LoadFinishedList = paintTask(finishedHandle,FINISHIED_LS);


    if (LoadPendingist !== null && LoadPendingist !== undefined ){
        pendingList=LoadPendingist; 
    }
    if (LoadFinishedList !== null && LoadFinishedList !== undefined){
        finishedList=LoadFinishedList; 
    }
}

// Storage,pendingHandle
function paintTask(TaskNameHandle,LsName){

    const lsList = JSON.parse(localStorage.getItem(LsName));
    

    if (lsList !== null){
        lsList.forEach(function (list){     
            const Li = document.createElement("li");
            const Span = document.createElement("span");
            const taskValue = list.task; 
            const delBtn = document.createElement("button");

            Li.id=list.id;

            Span.innerText=taskValue;
            Li.appendChild(Span);
            TaskNameHandle.appendChild(Li);

            delBtn.innerText="❌";
            delBtn.addEventListener("click",deleteTask);
            Li.appendChild(delBtn);
        });
        return (lsList);
    }
}

function taskMove (from,to){
    const btnHandle = event.target;
    const li = btnHandle.parentNode;


    const a  =  from.filter(function (task){ return task.id === li.id })
    to.push(fromLi);
    from = from.filter(
        function (fromLi){
            if (parseInt(li.id) === fromLi.id){
                to.push(fromLi);
            }
            return parseInt(li.id) !== fromLi.id;
        } 
    )
    return (from,to);
}


function addTask(event){
    event.preventDefault();
    const taskValue = inputHandle.value;
    const newId=  pendingList.length+1;

    // pending 에 리스트 추가
    const pendingLi = document.createElement("li");
    const pendingSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");


    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteTask);

    checkBtn.innerText="✅";
    checkBtn.addEventListener("click",function (){(pkendingList,finishedList) = taskMove(pendingList,finishedList) });
    console.log(pendingList,finishedList);

    // paintTask(pendingHandle,PENDING_LS);
    if (taskValue !== null && taskValue !== ""){
        pendingSpan.innerText=taskValue;

        pendingLi.appendChild(pendingSpan);
        pendingLi.appendChild(delBtn);
        pendingLi.appendChild(checkBtn);
        pendingLi.id=newId;checkBtn

        pendingHandle.appendChild(pendingLi);

        //pending LocalStorage 추가
        const appendObj = {
            id:newId,
            task:taskValue
        };

        pendingList.push(appendObj);
        localStorage.setItem(PENDING_LS,JSON.stringify(pendingList));

    }
    inputHandle.value="";
}

function init (){
    loadLsList();
    form.addEventListener("submit",addTask);
};

init();
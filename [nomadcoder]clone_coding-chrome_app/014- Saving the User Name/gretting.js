const form = document.querySelector(".js-form"),
input = document.querySelector("input"), 
greeting=document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    // localStorage.setItem(key, value);
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault(); // submit event 발생시 새로고침(?)되는 기본동작을 막는것
    const currentValue = input.value; // 사용자가 input.value에 입력한 값을 currentValue로 가져옴
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN); // 이름을 묻는 form 태그를 display 함.
    form.addEventListener("submit", handleSubmit);  // 사용자가 이름을 적고 enter을 누를때 발생하는 event
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // 이름을 묻는 상자를 없애버림
    greeting.classList.add(SHOWING_CN); // h4의 출력태그를 display 하도록 함.
    greeting.innerText=`Hello ${text}`; // h4 출력태그에 내용을 채움
    
}

function init(){
    const currentUser = localStorage.getItem(USER_LS);
    // 로컬 스토리지에서 USER_LS("currentUser")의 value 값을 가져옴
    
    if (currentUser === null){
        // value 값이 존재하지 않을 때

        // user name이 존재하지 않는경우 이름을 요청함
        askForName();


    }else{
        // value 값이 존재할 때
        paintGreeting(currentUser);
    }
}

init();
// localstorage
// 작은 정보를 저장함. 

const rangeInfo = document.querySelector("#rangeInfo"),
rangeInput = document.querySelector ("input"),
guessInput = document.querySelector("#guessInput"),
playBtn = document.querySelector("#playBtn"),
status = document.querySelector("#status"),
result = document.querySelector("#result");

/*
1. querySelector() 로 가져오는 id랑 변수명은 같아야함
2. EventLister 로 등록하는 함수는 앞에 handle~~ 와 같이 이름을 지어야함 
*/


function getRandomNumber(min, max) { // min~max 에 랜덤 숫자를 입력함
    return Math.floor(Math.random() * (max - min) + min);
  }

function handleRangeInput(event){ // range가 변경되는대로 출력
    const rangeValue = event.target.value // range에 수정된 정확한 값을 집어넣음
    rangeInfo.innerText=`Generate a number between 0 and ${rangeValue}`; // 집어넣어진 값을 출력
}

function handlePlayBtn(event){
    const guessValue = parseInt(guessInput.value); // 사용자가 입력한 값
    const randomValue = getRandomNumber(0, rangeInput.value); 

    status.innerText = `You chose: ${guessValue}, the machine chose: ${randomValue}`;
    if(guessValue === randomValue){
        result.innerText = `You won!!`;
    }
    else{
        result.innerText = `You lost!!`;
    }
}

function initRangeInfo(){
    const rangeValue = rangeInput.value // range에 수정된 정확한 값을 집어넣음
    rangeInfo.innerText=`Generate a number between ${rangeInput.min} and ${rangeValue}`; // 집어넣어진 값을 출력
}

function init (){
    initRangeInfo()
    // 뭔가 변하고 추가하고 페이지를 주무루는 함수
    rangeInput.addEventListener("input", handleRangeInput); // range 값을 변경 했을때
    playBtn.addEventListener("click", handlePlayBtn); // play 버튼을 눌렀을때
}

init();

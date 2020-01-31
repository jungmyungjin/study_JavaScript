const clockContainer1= document.querySelector(".js-clock");
// querySelector(object) : 해당 element의 자식을 탐색하는것 (여기선 전체 document에서 "js-clock"을 탐색하는 것)
const clockTitle1 = clockContainer1.querySelector("h1");

const clockContainer= document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector("h1");
// 위의 코드 2줄과 위 1줄은 같은 내용임.


function getTime(){
    const date = new Date();
    // Date : class, 자세한 설명을 다른 강좌에서 말하겠음
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours <10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds< 10 ? `0${seconds}` : seconds}`;

}

function init(){
    getTime();
    setInterval(getTime,1000);

    /*
    setInterval(실행할 함수, 실행하고 싶은 간격(밀리세컨이 기준).)
    type :function
    함수를 원하는 간격마다 실행시켜 줌
    */
}
init();
const contents = document.querySelector("#h1");

/*

JS는 Event에 반응하기 위해 만들어짐
Event : click, scroll, print, changing, closing ...

이러한 이벤트를 가로챌수도있음
그것에 대해 windows event를 예를들어 실습해보자.
*/

function handleResize(){
    console.log("I have been resized");
}

window.addEventListener("resize",handleResize);
/* <Line 설명>
windos          - windows의 이벤트들 중
addEventListener - event를 listen 하는 기능의 function type의 windows의 object
resize          - 사이즈 변경
handleResize    - addEventListener 함수의 인자는 event name 과 function 이므로 위에 만들어놓은 function을 넣어준다.
*/

/* ※주의할 점
("resize",handleResize()) 과 
("resize",handleResize) 는 다르다.

두번째 인자 type이 function 이라고 ("resize",handleResize())을 넣게 되면, event의 발생 유무와 관계없이 
handleResize 함수가 즉시 실행된다.
*/

function handleResize2(event_eh_yo,test){
    console.log(event_eh_yo,test);
}

window.addEventListener("resize",handleResize2);

// event 관련 함수들은 기본적으로 그 이벤트 정보를 담고 있는 인자가 딸려있음.
// test 삼아 두번째인자를 받아 console.log에 출력했을때, undefined 라고 뜸


// 글자를 클릭한 경우 색깔이 바뀌는 Event
function handleClick(){
    contents.style.color="blue";
}

window.addEventListener("click",handleClick);

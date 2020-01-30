// color 자체를 JS에서 전부 컨트롤 하는것은 CSS와 JS를 비효율적을 사용한다는 것이 된다.
const CLICKED_CLASS = "clicked";

// title1
const title1 = document.querySelector("#title1");

function handleClick1 ( ) {
    const currentClass =title1.className;

    if(currentClass !== CLICKED_CLASS){ // 현재 title class에 "clicked" class가 없을 때,
        title1.className=CLICKED_CLASS;  // "clicked" class를 추가한다.
    }
    else{   // 현재 title class에 "clicked" class가 있을 때,
        title1.className = "";   // title에 있는 class를 지운다.
    }
};

title1.addEventListener("click",handleClick1);



//title2
// ※ 기존에 title2에 class가 존재할 경우 삭제되는 문제가 발생한다.
const title2 = document.getElementById("title2");

function handleClick2 ( ) {
    const currentClass =title2.className;

    if(currentClass !== CLICKED_CLASS){ // 현재 title class에 "clicked" class가 없을 때,
    title2.className=CLICKED_CLASS;  // "clicked" class를 추가한다. <<< 이때, 기존에 있던 class를 덮어 씌우게 된다.
    }
    else{   // 현재 title class에 "clicked" class가 있을 때,
    title2.className = "";   // title에 있는 class를 지운다. <<< 이때, 기존에 있던 class까지도 전부 없애게 된다.
    }
};

title2.addEventListener("click",handleClick2);



//title3
// classList로 원하는 class 추가/제거 하기
const title3 = document.querySelector("#title3");

function handleClick3 ( ) {
    const hasClass = title3.classList.contains(CLICKED_CLASS);
    // classList.contains("<classname>") : element의 클래스중 해당 <classname>이 존재하는지 비교하는 함수
    if(!hasClass){ 
        title3.classList.add(CLICKED_CLASS);
        // classList.add("<classname>"") : elemnet의 클래스에 해당 <classname>을 추가
    }
    else{   
        title3.classList.remove(CLICKED_CLASS);
        // classList.remove("<classname>"") : elemnet의 클래스에 해당 <classname>을 제거
    }
};

title3.addEventListener("click",handleClick3);



//title4
// title3 에서 하는 동작을 classList.toggle을 이용하여 해보기

/*
classList.[toggle]
하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.
두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거한다.
*/
const title4 = document.querySelector("#title4");

function handleClick4 ( ) {
    title4.classList.toggle(CLICKED_CLASS);
};

title4.addEventListener("click",handleClick4);


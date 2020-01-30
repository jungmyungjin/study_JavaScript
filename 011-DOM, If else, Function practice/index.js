// 클릭할때마다 글자의 색깔이 바뀌는 페이지 만들기

const title = document.getElementById("h1");
const baseColor = "white";
const otherColor="red";

function ChangeColor ( ) {
    if (title.style.color === baseColor){
        title.style.color=otherColor;    
    }
    else{
        title.style.color=baseColor;
    }
};

title.addEventListener("mouseover",ChangeColor);
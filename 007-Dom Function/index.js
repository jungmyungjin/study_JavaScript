// Document Object Module
// 이미 만들어진 함수.

//document 구조 보기
console.log(document);

//document에 있는 function 중 하나 사용
// title = id가 title인 것에 대한 정보를 담음 
const title = document.getElementById("title");
console.log(title);

// DOM : HTML 태그를 가져다가 객체로 만듦.

//DOM으로 할 수 있는 것들

// JS만을 사용해서 title 변경하기
title.innerHTML = "Hi From JS";

//JS만을 사용해서 h1 내용 변경하기
const h1 = document.getElementById("h1");
h1.innerHTML = "I'm JavaScript";
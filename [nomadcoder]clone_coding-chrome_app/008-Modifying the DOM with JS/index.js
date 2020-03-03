const title = document.getElementById("title");
const h1 = document.getElementById("h1");

title.innerHTML="Hi ! From JS";
console.log(title);

// .dir : 앞서 정의한 object h1으로 할 수 있는 모든것을 보여줌
console.dir(h1);

// .dir 내에서 본 .style 을 사용하여 html h1의 글자 색깔 변경하기
h1.style.color = "red";


// .dir : document object가 사용할 수 있는것 보기
console.dir(document);

document.title="I own you now";


// JavaScript에서 HTML등 여러가지를 수정할수 있음!!!


// querySelector : 문서내에서 해당 선택자를 찾음 (※같은 id가 여러개 중복되는 경우 첫번째로 선언한 element를 반환)
// css와 동일하게 . # 등으로 type, class name, id 를 선택ㅎㄹ 수 있음
const h1_obj = document.querySelector("h1");

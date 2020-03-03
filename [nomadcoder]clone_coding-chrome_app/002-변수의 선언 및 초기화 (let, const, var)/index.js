// let : 변수를 초기화 하거나 생성할 경우엔 let을 사용 한다 (하지 않아도 동작되긴 한다..)
let a=221;
let b=a-5;

a=4; // 변수 a의 값을 업데이트 

console.log(b);



// const : 상수. 변하지 않는 상수
const c=221;
let d = c-5;
c=4;    // 에러발생! Uncaught TypeError: Assignment to constant variable. (const로 선언된 c의 값을 다시 선언하려고 함)

console.log(c,d);



// 정리
// 다른 값으로 변경 가능한 변수 => let
// 다른 값으로 변경 불가능한 변수 => const



// 변수 선언 var
// 3년전 변수는 var 만 존재했었음
// 하지만 지금은 let과 const로 나누어 사용하고 있음
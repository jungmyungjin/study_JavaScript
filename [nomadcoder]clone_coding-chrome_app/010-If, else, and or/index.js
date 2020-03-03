// 조건문은 경험이 있어서 여러 case만 실습해보기로 함

if (10 === 5){
    console.log("hi");
}
else{
    console.log("hi");
}
// 같다 를 나타낼땐 = 를 세번 쓴다.


if ("10" === 10){
    console.log("yes");
}
else{
    console.log("no");
}
// string과 number는 다르다.


if( 20 > 5 && "nicolas" === "myungjin"){
    console.log("same!");
}
else{
    console.log("different!");
}
// ※ perl 처럼 "and"와 "or" 같은 연산자는 존재하지 않는다.


const age = prompt("How old are you?");
if( age >= 18 && age <= 21){
    console.log("you can dring but you should not");
}
else if(age > 21){
    console.log("go ahed");
}
else{
    console.log("too young");
}
/* prompt
c언어 에서의 scanf와 같은것, 사용자에게 입력받는 명령어.
JS초반에 썼던 명령어로, 이젠 활용성이 많은 html등 다른방법으로 쓰기에 현재는 쓰이지 않는다고 함.
*/
// ※ "elsif" 가 아니라 "else if" 임
// Object : 각 value 별로 이름을 지정할 수 있는 List 형태
const myInfo = {
    name: "myungjin",
    age: 25,
    isLovely:true
};

console.log("Hello");

// Function : 함수
console.log("Hello");
console.log(myInfo.name);

/* 위 코드 두줄의 공통점
    console - type : object
    myInfo - type: object
    .log - type : function
    .name - type : string
*/

/* 어디서 왔니
myInfo - 이 js 코드 내에서 새로 생성한 Object
console - JavaScript의 built in function(내장 기능)
*/

// 함수 만들기
function sayHello(name, age){
    console.log("Hello, ", name ,"!! you have ", age, "year of age.");
}
// name, age : argument/parameter(인자/매개변수)

sayHello("myungjin",25);
// sayHello 함수 만들기 완성!

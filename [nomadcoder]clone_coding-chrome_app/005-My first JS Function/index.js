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
    // 문자열을 감싸는 기호 : ' " `
    //그저그런 방법 1 
    console.log("Hello, ", name ,"!! you have ", age, "year of age.");

    //그저그런 방법 2
    console.log('Hello, '+name + '!! you have '+age+' years of age.');

    //깔끔한 방법 ( ` 로만 가능 )
    console.log(`Hello ${name}!! you are ${age} years old`);
}
// name, age : argument/parameter(인자/매개변수)

sayHello("myungjin",25);
// sayHello 함수 만들기 완성!


// 함수 return
function sayHi(name, age){
    return `Hi ${name}!! you are ${age} years old`
}

console.log(sayHi('moai',24));
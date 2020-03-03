const calculator_nico = {
    plus:function(a,b){
        return a+b;
    }
}


console.log('hello');
calculator_nico.plus(5,5);
// 위 두개의 object는 type이 function인 key값 plus와 log를 호출한다.


// practice
const calculator ={
    plus:function(a,b){
        return a+b;
    },
    subtraction:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    division:function(a,b){
        return a/b;
    }
};

console.log("plus "+calculator.plus(6,2));
console.log("subtraction "+calculator.subtraction(6,2));
console.log("multiply "+calculator.multiply(6,2));
console.log("division "+calculator.division(6,2));
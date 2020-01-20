/* 
< 가운데 글자 가져오기 >

[문제 설명]
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

[재한사항]
s는 길이가 1 이상, 100이하인 스트링입니다.
*/


function solution(s) {
    var answer = '';
    var string = s.split(''); // 각 배열로 집어넣음
    var string_length = string.length;
    var string_center = parseInt(string.length / 2) - 1; // 소수점 제거, array는 0부터 시작하여 -1

    if (1<string_length && string_length<=100){
        if (string_length % 2) { // 나머지 : 5 = 홀
            answer = string[string_center+1];
        }
        else{   // 나머지 : 0 = 짝
            answer = string[string_center]+string[string_center+1];
        }
    }
    return answer;
}

console.log("answer : " + solution("a") );

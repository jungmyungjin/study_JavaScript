function solutionA(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let continuously = 1;
    // console.log(`//////////////i = ${i}, ${s.substr(i, 1)}`);
    for (let j = 1; j < s.length - 1; j++) {
      if (0 <= i - j && i + j <= s.length - 1) {
        if (s.substr(i - j, 1) === s.substr(i + j, 1)) {
          continuously = continuously + 2;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (answer < continuously) {
      answer = continuously;
    }
  }
  return answer;
}

function solutionB(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let continuously = 0;

    if (s.substr(i, 1) === s.substr(i + 1, 1)) {
      continuously = continuously + 2;
      for (let j = 1; j < s.length; j++) {
        if (i - j >= 0 && i + j + 1 <= s.length) {
          if (s.substr(i - j, 1) === s.substr(i + j + 1, 1)) {
            continuously = continuously + 2;
          } else {
            break;
          }
        }
      }
    }

    if (answer < continuously) {
      answer = continuously;
    }
  }
  return answer;
}

function solution(s) {
  let bestAnswer = 0;

  bestAnswer = solutionA(s) > solutionB(s) ? solutionA(s) : solutionB(s);

  return bestAnswer;
}

console.log(solution("bcbabbaaacaa"));

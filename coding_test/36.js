function solution(s) {
    var answer = '';
    answer = s.split("").sort().reverse().join("");
//     for (let i = s.length-1; i>=0; i--) {
//         answer += s[i]
//     }
    return answer;
}
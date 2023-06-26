// 3진법 뒤집기

function solution(n) {
    let arr = [];
    while (n > 0) {
        arr.push(n % 3);
        n = Math.floor(n / 3);
    }
    let answer = 0;
    console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        answer += arr[i] * Math.pow(3, arr.length - 1 - i)
    }
    return answer
}


// N진법 > 숫자나누기N 몫+나머지 
// decimal.toString(N

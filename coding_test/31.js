function solution(arr)
{
    var answer = [arr[0]];
    for (let i=1; i<arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            answer.push(arr[i])

        }
        console.log(answer)

    }
    return answer;
}



//
function solution(arr)
{
    var answer = [0];

    for(let i = 0 ; i < arr.length ; i ++){
          var count = 0;
          for(let j = 0 ; j < arr.length ; j++){
                    if (arr[i]===arr[i+1]) {
                              arr.splice (i,1);
                              count +1 ;
                    }
                    if(count === 0 ) return arr;
          }
}
}
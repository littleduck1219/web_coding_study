function solution(nums) {
          var answer = 0;
          var sums = [];
          
          for(i = 0 ; i < nums.length; i++){
                    for(j = 0 ; j <nums.length; j++){
                              for(k = 0 ; k<nums.length ; k++){
                                        if( i!=j && j!=k && i!=k){
                                                  let sum = nums[i]+nums[j]+nums[k];
                                                  if(!sums.includes(sum)){
                                                            sums.push(sum);
                                                  }
                                        }
                              }
                    }
          }
          answer = sums.length;
          for( j = 0 ; j < sums.length ; j ++){
                    let count = 0;
                    for(i=2; i<sums[j] ; i++){
                              if(sums[j]%i == 0) {
                                        count++;
                              }                             // ㅇ<-<
                    }
          }
          return answer;
}

// 진지하게 그만둘까 고민중입니다 하하
// 하하하하!!!!!!! 코하하
// 코테 죄악 소수 제곱근 다차원행렬
// 이 이상 고민하는건 의미 없을듯. 따른 사람거 보고 넘깁시다 ㅋㅋㅋㅋ
// 다른문제 좀 풀고 리프레시하고 다시 올까요
// 리프레쉬 될지 모르겟지만 그렇게 하죠

function solution(nums) {
    let cnt = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let prime = true;

                if (sum < 2) prime = false;
                for (let l = 2; l*l <= sum; l++) {
                    if (sum % l === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) count++;
            }
        }
    }
    return cnt;
}

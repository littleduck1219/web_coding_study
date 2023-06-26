

function solution(answers) {
    let pattern_one = [1, 2, 3, 4, 5]
    let pattern_two = [2, 1, 2, 3, 2, 4, 2, 5]
    let pattern_three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let score = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern_one[i % pattern_one.length]) score[0]++;
        if (answers[i] === pattern_two[i % pattern_two.length]) score[1]++;
        if (answers[i] === pattern_three[i % pattern_three.length]) score[2]++;
    }


}


function solution(answers) {
          let pattern_one = [1, 2, 3, 4, 5]
          let pattern_two = [2, 1, 2, 3, 2, 4, 2, 5]
          let pattern_three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
          let score = [0, 0, 0]
          
          for (let i = 0; i < answers.length; i++) {
              if (answers[i] === pattern_one[i % pattern_one.length]) score[0]++;
              if (answers[i] === pattern_two[i % pattern_two.length]) score[1]++;
              if (answers[i] === pattern_three[i % pattern_three.length]) score[2]++;
          }
          
      
          let topScore = Math.max(...score);
          let answer = [];
          for (let i = 0; i <score.length; i++) {
            if (score[i] === topScore) answer.push(i + 1);
          }
          return answer;
      }
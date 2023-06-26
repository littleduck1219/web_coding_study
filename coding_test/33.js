function solution(lottos, win_nums) {
          const rank = [6, 6, 5, 4, 3, 2, 1];

          var answer = [] ;
          const nums = lottos.filter( n => n != 0);
          const correct = nums.filter( c => win_nums.includes(c));
          const zeros = 6 - nums.length;
          // if(zeros === 6) return [1,6];
          // if(zeros + correct.length === 0) return [6,6];
          
          return [rank[zeros+correct.length], rank[correct.length]];
}


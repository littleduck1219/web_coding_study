function solution (sizes) {
          const reload = sizes.map(([w, h]) => w<h ? [h, w] : [w, h]);
          var answer = [0, 0];
          reload.forEach(([w, h]) => {
            if (w > answer[0])answer[0]=w;
            if (h > answer[1])answer[1]=h;
          })
          return answer[0]*answer[1]
}

const arr = [[1,2],[3,4],[5,6]]
let second = [0,0]
answer = arr.filter(([w, h])=>{
          [w == Math.max(arr[0]), h]
})
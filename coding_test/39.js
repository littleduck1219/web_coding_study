function solution(s, n) {
          var answer = '';

          s = s.split("");
          const askii = s.map( a => a!=" " ? a.charCodeAt()+n : a.charCodeAt());
          for(i = 0 ; i<s.length; i++){
                    if( s[i].charCodeAt() <= 90){
                              if(askii[i]>90) askii[i] -= 26;
                    }
                    else {
                              if(askii[i]>122) askii[i] -= 26;
                    }
          }
          answer = askii.map( a => String.fromCharCode(a));

          return answer.join("");                 // ( •̀ ᴗ •́ )و
}

// 푸셧나요?                  // 네1!!!!!!!!!!!!!!11
// 쌉고수                     // 카카오가 저따위를
// 카카오 가실듯 ㅇㅇ 
//크 겸손
        // 구글링쌉고수
        // 마지막 문제 개극혀ㅓㅁ 보기도 싫네
function solution(s, n) {
    var answer = '';

    for (let i=0; i<s.length; i++) {
        let charCode = s.charCodeAt(i);
        let change = 0;
        
        if (s[i] === " ") {
            answer += " ";
            continue;
          }


    }
    console.log(charCode + n);
    return answer;
}
function solution(s) {
          const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
          s = s.split("");
          var temp = [];
          var word = "";

          for( i = 0 ; i < s.length; i++){
                    if(Number.isInteger(Number(s[i]))) temp.push(s[i]);
                    else word += s[i];
                    
                    if (number.includes(word)){
                              temp.push(number.indexOf(word));
                              word="";
                    }
          }
          temp = temp.join("");
          return Number(temp);
          
}


function solution(s) {
    const number = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
      };    
    let answer = "";
    let words = "";
    
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        words += s[i];
  
        if (number.hasOwnProperty(words)) {
          answer += number[words];
          words = "";
        }
      } else {
        answer += s[i];
      }
    }
    return Number(answer);
  }
  
function solution(new_id) {
    new_id = new_id.toLowerCase();

    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'
    let temp = '';
    for (let i = 0; i < new_id.length; i++) {
        if (chars.includes(new_id[i])) {
            temp += new_id[i];
        }
    }
    new_id = temp;
    let re_char = '';
    temp = ''
    for (let i = 0; i < new_id.length; i++) {
        if (!(new_id[i] === '.' && re_char === '.')) {
            temp += new_id[i];
        }
        re_char = new_id[i];
    }
    new_id = temp;

    if (new_id.startsWith('.')) {
        new_id = new_id.slice(1);
    }
    if (new_id.endsWith('.')) {
        new_id = new_id.slice(0, -1);
    }
    if (new_id === '') {
        new_id = 'a';
    }
    if (new_id.length > 15) {
        new_id = new_id.slice(0, 15);
        if (new_id.endsWith('.')) {
            new_id = new_id.slice(0, -1);
        }
    }
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1]
    }
    return new_id;
}



function solution(new_id) {
    
    // 1~2단계
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'
    var lowcase = new_id.toLowerCase().split("");
    var removed = lowcase.filter(a => chars.includes(a)).join("");
    
    // 3단계
    var str = removed.split("...").join(".");
    str = str.split("..").join(".");
    
    // 4단계
    if (str[0] ===".") str = str.substr(1);
    if (str[str.length-1] ===".") str = str.substr(0,str.length-1);

    // 5단계
    if (str === "") str = "aaa";        // 테케 3 12 15 16 20 21 22 23 25 26
    
    // 6단계
    if(str.length > 15){
        str = str.substr(0,15);
        if(str[str.length-1]===".") str = str.substr(0, str.length-1);
    }
    
    // 7단계
    if(str.length <=2) str += str[str.length-1].repeat(3-str.length)
    
    return str;

}

function step1 (str){

}



function solution(new_id) {
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi; 
    var lowcase = new_id.toLowerCase();
    var removed = lowcase.replace(reg,"");
    removed = removed.split("...").join(".");
    removed = removed.split("..").join(".");

    var sbstr = removed;
    if(removed[0]==".") sbstr = removed.substr(1);
    if(removed[removed.length-1]==".") sbstr = removed.substr(0, removed.length-1);

    if(sbstr === "") sbstr ="a";

    if(sbstr.length > 15) {
        sbstr = sbstr.substr(0,15);
        if(sbstr[sbstr.length-1]==".") var sbstr = sbstr.substr(0, sbstr.length-1);
    }

    if(sbstr.length <=2){
        while(sbstr.length < 3){
            sbstr += sbstr[sbstr.length-1];
        }
    }
    return sbstr;
}
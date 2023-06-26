function solution(strings, n) {
    let str = []
    for (var i = 0; i < strings.length; i++) {
        str.push(strings[i][n] + strings[i])
        str.sort()
    }
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].substring(1)
    }
    return str
}
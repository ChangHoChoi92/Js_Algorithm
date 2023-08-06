// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램

function String(str) {
    // 1. 하나의 문자열을 각각 배열로 분리 시킴
    let split = str.split("");

    // 2. 배열을 반전한다. 시작이 끝이되고 끝이 시작으로 간다.
    let reverse = split.reverse();

    // 3. 배열로 된 것을 모두 합친다.
    let join = reverse.join("");
    return console.log(join);
}

String('olleh')
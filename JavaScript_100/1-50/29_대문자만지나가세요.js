// 문제 29 : 대문자만 지나가세요.
// 알파벳 하나만을 입력하고 그 알파벳이 대문자면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

function areYouEng(String) {
    result = "";

    if (String === String.toUpperCase()) {
        result = "YES"
    } else {
        result = "NO"
    }
    return console.log(result);
}

areYouEng("D")

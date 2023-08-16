// 문제 32 : 문자열 만들기
// 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

function search(string) {
    let split = string.split("");
    let count = 0;
    for (let i = 0; i < split.length; i++) {
        if (split[i] === " ") {
            count++;
        }
    }
    return console.log(count);
}

search("안녕하세요. 저는 제주대학교 컴퓨터공학전공 최창호 입니다.")
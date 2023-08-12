// 문제 30 : 문자열 속 문자 찾기
// 첫번쨰 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다. 그 문자가 시작하는 index를 반환하는 프로그램을 만들어주세요.


function result(word, keyword) {
    answer = word.indexOf(keyword);
    return console.log(answer)
}

result("파인애플은 참 맛있습니다.", "애플")
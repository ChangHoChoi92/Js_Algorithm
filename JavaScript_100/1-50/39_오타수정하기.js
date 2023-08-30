// 문제 39  : 오타 수정하기
// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

function solution(string) {
    answer = string.replaceAll('q', 'e');
    return console.log(answer);
}

// solution('querty');
solution('hqllo my namq is hyqwon');
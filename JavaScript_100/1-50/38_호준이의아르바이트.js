// 문제 38 : 호준이의 아르바이트
// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생중 중복 되는 학생까지 포함하여 사탕을 사기로 한다. 학생들의 점수를 공백으로 구분하여 입력받고 사탕을 받을 학생의 수를 출력 하세요.

function solution(score) {
    var answer = 0;
    let arr = score.split(" ").sort((a, b) => a - b);
    let result = [];

    while (result.length < 4) {
        let value = arr.pop();
        if (!result.includes(value)) {
            result.push(value);
        }
        answer++;
    }

    console.log(arr)
    console.log(result)
    return console.log(answer - 1);
}

solution('97 86 86 86 75 66 55 97 85 97 97 95')
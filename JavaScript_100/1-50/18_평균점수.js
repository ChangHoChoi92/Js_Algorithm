// 문제18 : 평균 점수
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.

function average(total) {
    const split = total.split(" ");
    // const numberArray = (arg) => Number(arg);
    const numberArray = function (arg) {
        return Number(arg);
    }
    const newArray = Array.from(split, numberArray);
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i];
    }
    let result = parseInt(sum / newArray.length);
    return console.log(result)
}


average('10 20 30');
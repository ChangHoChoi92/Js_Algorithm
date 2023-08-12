// 문제 25 : 원의 넓이를 구하세요.
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다. 함수를 사용하여 원의 넓이를 구하는 코드를 작성하세요.

let input = 7;

function circle(n) {

    return n * n * 3.14;
}

console.log(circle(input))
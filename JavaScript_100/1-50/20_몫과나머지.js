// 문제 20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다. 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

function div(num1, num2) {
    let div1 = parseInt(num2 / num1);
    let div2 = num2 % num1
    return console.log(`${div1} ${div2}`)
}


div(10, 2);
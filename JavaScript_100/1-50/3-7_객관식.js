// 문제3 : 변수의 타입
// 다음 출력 값으로 올바른 것은?

let arr = [100, 200, 300]
console.log(typeof (arr));
// 답 : object (배열)


// 문제4 : 변수의 타입2
// 다음 변수 a를 type(a)로 넣었을 때 출력될 값과의 연결이 맞지 않은 것은?
// 답 : 2 - 2.22는 number

// 1) 입력: a = 1, 출력: number
// 2) 입력: a = 2.22, 출력: boolean
// 3) 입력: a = 'p', 출력: string
// 4) 입력: a = [1,2,3], 출력: object


// 문제5 : for문 계산
// 다음 코드의 출력 값으로 알맞은 것은?
// 답 : 16
let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
    console.log(i)
    a += i;
}
console.log(a + b)

// 1) 10
// 2) 12
// 3) 14
// 4) 16


// 문제6 : False
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다. 그 중 False로 취급하지 않은 것이 하나 있네요! True를 찾아주세요.
// 답 : 2 (1은 number)
// 해석 : 0을 제외한 모든 숫자는 false
// NaN, "", 0, undefiend, null 은 모두 falsey 값

// 1) NaN
// 2) 1
// 3) ""
// 4) 0
// 5) undefined


// 문제7 : 변수명
// 다음 변수명으로 사용할 수 없는 것 2개를 고르시오.
// 답 : 3,5

// 1) age
// 2) &age
// 3) let
// 4) _age
// 5) 1age





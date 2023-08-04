// 문제10 : 별찍기
// 트리형태의 별 출력하시오

//입력 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

let input = 5;
let count = input * 2;
let gb = input;

for (let star = 1; star <= count; star += 2) {
    console.log(" ".repeat(--gb) + "*".repeat(star));
}

// 트리 뒤집기 (응용)
// for (let star = 9; star >= 1; star -= 2) {
//     console.log(" ".repeat(++gb) + "*".repeat(star));
// }



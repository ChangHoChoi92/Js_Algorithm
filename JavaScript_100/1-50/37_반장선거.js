// 문제 37 : 반장 선거
// 학생들이 뽑은 후보들을 입력받은면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램 작성

const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

// for (let index in arr) {
//     let val = arr[index];
//     result[val] = result[val] === undefined ?
//         1 : result[val] + 1
// }

for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    result[val] = result[val] === undefined ?
        1 : result[val] + 1;
}
winner = Object.keys(result).reduce(function (a, b) {
    console.log(a, b);
    return result[a] > result[b] ? a : b
});
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
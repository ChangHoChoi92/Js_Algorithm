// 문제 34 : sort 구현 하기
// 키가 주어지면 순서대로 정렬 하기

const unsorted = "176 156 155 165 166 169";
let sorted = "";

sorted = (unsorted.split(" ").sort(function (a, b) {
    return a - b;
})).join(" ");

console.log(sorted);

if (unsorted === sorted) {
    console.log("YES")
} else {
    console.log("No")
}


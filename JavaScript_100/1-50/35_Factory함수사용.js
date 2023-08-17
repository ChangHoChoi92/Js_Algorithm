// 문제 35 : Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들기.

function one(n) {
    function two(x) {
        return Math.pow(x, n);
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));




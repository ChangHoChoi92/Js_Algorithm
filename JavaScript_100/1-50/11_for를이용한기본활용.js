// 문제11 : for를 이용한 기본 활용
// 1 부터 100 까지 모두 더하는 코드를 완성하세요. (for 사용)

let sum = 0;
for (let i = 1; i <= 100; i++) {
    console.log(sum + " + " + i + " = " + (sum + i));
    sum += i;

}
console.log("총 합계: " + sum);
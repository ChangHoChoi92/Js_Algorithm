// 문제13 : 몇 번째 행성인가요?
// 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성 으로 총 8개
// 우리 태양계의 n번째 행성이 무엇인가?
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해주세요.
// 예를 들어 1이 입력되면, 첫 번째 행성인 수성이 출력 됩니다.
let num = 2;
switch (num) {
    case 1:
        console.log("수성");
        break;
    case 2:
        console.log("금성");
        break;
    case 3:
        console.log("지구");
        break;
    case 4:
        console.log("화성");
        break;
    case 5:
        console.log("목성");
        break;
    case 6:
        console.log("토성");
        break;
    case 7:
        console.log("천왕성");
        break;
    case 8:
        console.log("해왕성");
        break;
    default:
        console.log("1~8 까지 숫자를 입력해주세요.");
}

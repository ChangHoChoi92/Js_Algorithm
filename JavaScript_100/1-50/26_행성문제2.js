// 문제 26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성의 이름을 한글로 입력하면 영어로 반환하는 프로그램을 만들어주세요.

conversion("지dd")
function conversion(result) {
    let answer = "";
    switch (result) {
        case "수성":
            answer = console.log("Mercure");
            break;
        case "금성":
            answer = console.log("Venus");
            break;
        case "지구":
            answer = console.log("Earth");
            break;
        case "화성":
            answer = console.log("Mars");
            break;
        case "목성":
            answer = console.log("jupiter");
            break;
        case "토성":
            answer = console.log("Saturm");
            break;
        case "천왕성":
            answer = console.log("Uranus");
            break;
        case "해왕성":
            answer = console.log("Neptune");
            break;
        default:
            answer = console.log("행성 이름을 입력해주세요.");

    }

    return answer;
}
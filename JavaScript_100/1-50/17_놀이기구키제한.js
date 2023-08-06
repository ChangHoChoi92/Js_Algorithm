// 문제17 : 놀이기구 키 제한
// 담당하고 있는 놀이기구는 키가 150cm 이상만 탑승가능
// 입력으로 키가 주어지면 키가 150이 넘으면 YES 출력, 틀리면 NO를 출력하는 프로그램

function height(height) {
    const centimeter = parseInt(height);
    let meseege = "";
    if (centimeter >= 150) {
        meseege = 'YES!!';
    } else {
        meseege = 'NO!!';
    }
    return console.log(meseege)
}

height(149);
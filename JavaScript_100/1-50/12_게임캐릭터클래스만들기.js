// 문제12 : 게임 캐릭터 클래스 만들기
// 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오. (소스코드 수정 X)

// 데이터 (아래 클래스작성)
function Wizard(health, mana, armor) {

    return {
        attack: function () {
            return console.log(health + " " + mana + " " + armor + "\n파이어볼");
        }
    }
}


const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 출력
// 545 210 10
// 파이어볼
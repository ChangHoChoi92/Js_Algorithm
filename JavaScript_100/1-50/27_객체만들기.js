// 문제 27 : 객체 만들기
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.


const key = ["창호1", "창호2", "창호3"];
const value = ["23", "57", "95"];
let obj = {}

for (let i = 0; i < key.length; i++) {
    obj[key[i]] = value[i];
}

console.log(obj)
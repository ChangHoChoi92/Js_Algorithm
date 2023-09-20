import { atom } from "recoil";

// 이게 리코일 저장소 상태의 기본 형태
// key는 상태에 대한 식별자 같은건데 의미는 없다
// 하지만 다른 상태를 만들었을 때 key 이름을 중복 선언하면 에러가 난다
// 통상적으로 key 이름은 변수 이름과 똑같이 지어준다.

// default는 초기값
// const = 0

// recoil 상태 작성 형태
export const count = atom({ key: "count", default: 0 });


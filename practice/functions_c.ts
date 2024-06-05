// addNumbers

import addNumbers, {addStrings, format, printFormat} from "./functions";         //addStrings 함수는 export default로 export된게 아니라서 디스트럭쳐 방식으로 import해야함

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "squid"));             //error

// 실행하면 에러, VSC에서는 안잡힘
// 함수의 파라미터를 any라고 생각하기 때문
// 하지만 실제 a+b 계산에서 type가 달라 실패
// 함수 파라미터 타입을 지정

console.log(addStrings("squid", "game"));
console.log(addStrings("first"));
console.log(format("one", 2));

printFormat("title here", 234);
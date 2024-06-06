// Interface
// 객체타입을 정의할때는 interface
// 튜플, 유니언을 선언할때는 type이 좋음

/*
type은 모든 타입을 선언할 때 사용할 수 있고, interface는 객체에 대한 타입을 선언할 때만 사용할 수 있다.
또한 확장 불가능한 타입을 선언하고 싶다면 type을 사용하면 되고, 확장 가능한 타입을 선언하고 싶다면 interface를 사용하면 된다.
*/

type Name = string;
let namehere: Name = "squid";


interface ShowProps{
    first: string;
    second: string;
    num: number;
}

const myShowInterface: ShowProps = {
    first:"squid",
    second: "game",
    num: 456
}


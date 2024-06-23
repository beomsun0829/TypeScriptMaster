// 객체의 경우 const로 선언해도 객체의 내용이 변경될 수 있음
// 불변의 객체 (안의 내용까지) 만드는 법은 readonly 지정자

interface Cat{
    readonly name: string;
    breed: string;
}

function makeCat(name: string, breed:string): Cat{
    return {
        name, breed
    }
}

const kihun = makeCat("squid cat", "squidGame")
// kihun.name="kihun2"      //읽기 전용 속성이므로 'name'에 할당할 수 없습니다


type ReadonlyCat = Readonly<Cat>    //readonly 말고 타입스크립트의 유틸리티 타입 활용가능

function makeUtilCat(name: string, breed:string): ReadonlyCat{
    return {
        name, breed
    }
}



function makeCoordinate(x: number, y: number): [number, number]{
    return [x,y]
}

const c1 = makeCoordinate(10, 20);
c1[0] = 50;     //튜플 수정가능 (funciton이므로)

function makeCoordinateReadOnly(x: number, y: number): readonly[number, number]{
    return [x,y]
}

const c1_readonly = makeCoordinateReadOnly(11, 22);
//c1_readonly[0] = 51;      // 수정 불가능


// 배열의 readonly
const reallyConst = [10, 20, 30] as const;

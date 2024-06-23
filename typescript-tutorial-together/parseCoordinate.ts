interface Coordinate{
    x: number;
    y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate{
    return {
        ...obj
    }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate{
    return { x, y }
}


// 오버로딩할 함수 원형을 적는다
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;

// unknown은 타입스크립트에서 기본적으로 any 타입이지만 사용할 때는 다른 타입으로 캐스팅해야 하는 타입입니다.
// 옵셔널을 사용하여 파라미터 하나만 들어와도 되도록 한다
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    if (typeof arg1 === 'object') {
        coord = { ...(arg1 as Coordinate)}
    }

    else if (typeof arg1 === 'string') {
        (arg1 as string).split(",").forEach((str) => {
            const [key, value] = str.split(":");
            coord[key as 'x' | 'y'] = parseInt(value, 10);
        })

    }
        
    else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }

    return coord;
}

console.log(parseCoordinate({ x: 10, y: 20 }))
console.log(parseCoordinate(11, 22))
console.log(parseCoordinate("x:111,y:222"));
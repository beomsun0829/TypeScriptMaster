
// callback : 인자로 넘겨지는 함수
function introduce(lastName: string, firstName: string, callback: (fullName: string) => void) { 
    let fullName = lastName + firstName; 
	callback(fullName); 
}

introduce("홍", "길동", function(name: string) { 
	console.log(name); 
});


// callback에 대한 정보가 없어서 any타입으로 추론
export function printToFile(text: string, callback:any): void{
    console.log(text);
    callback();
}



// 콜백함수 mutate는 v: number를 받아서 v * 10: number를 반환
// arrayMutate는 number[]를 리턴
export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[]{
    return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));


// type 키워드
export type MutateFunction = (v: number) => number;

export function arrayMutateAgain(
    numbers: number[],
    mutate:MutateFunction
): number[]{
    return numbers.map(mutate);
}

console.log(arrayMutateAgain([1, 3, 5, 7], (v) => v * 100));
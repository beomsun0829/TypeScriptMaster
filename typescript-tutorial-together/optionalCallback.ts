
function addWithCallback(x: number, y: number, callback: () => void): void{
    console.log([x, y]);
    callback();
}


//call back 인자가 optional인 경우
function addWithCallbackOptional(x: number, y: number, callback?: () => void): void{
    console.log([x, y]);
    callback?.();
}
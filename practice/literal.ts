
function rollDice(dice: 1|2|3): number{
    let pip = 0;
    for (let i = 0; i < dice; i++){
        pip += Math.floor((Math.random()*5)+1);
    }
    return pip;
}

//console.log(rollDice(4));       //Argument of type '4' is not assignable to parameter of type '1 | 2 | 3'.ts(2345)
console.log(rollDice(3));


//string literal
// function overloading
function sendEvent(name: "addToCart", data: { productid: number }): void;
function sendEvent(name: "checkout", data: { bill: number }): void;

function sendEvent(name: string, data: unknown): void{
    console.log(`${name}: ${JSON.stringify(data)}`)
}


console.log(sendEvent("addToCart", { "productid": 10 }));
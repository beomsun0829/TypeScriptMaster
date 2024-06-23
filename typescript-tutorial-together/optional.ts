
// 파라미터 뒤에 ? 붙여서 옵셔널 파라미터
// 삼항연산자 사용
function printIngredient(quantity:string, ingredient:string, extra?:string){
    console.log(`${quantity} + ${ingredient} ${extra ? `+ ${extra}` : ""}`);
}

printIngredient("10", "water");
printIngredient("10", "water", "something else");

function simpleState(initial: string) : [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

const [get1, set1] = simpleState("Hello");

console.log(get1());
set1("World")
console.log(get1());
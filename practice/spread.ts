
const introduce = (greet: string, ...names: string[]): string =>
    `${greet} ${names.join(" ")}`


console.log(introduce("Hello", "Player1", "Player2", "Player3"));

const players: Array<string> = ["Player4", "Player5", "Player6"];
console.log(introduce("Welcome", ...players));
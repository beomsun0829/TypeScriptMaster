type MyFlexibleInfo = {
    name: string;
    [key: string]: string | number;
}

const player1: MyFlexibleInfo = {
    name: "P1",
    race:"human"
}

const player2: MyFlexibleInfo = {
    name: "P2",
    age: 20,
    power: 10
}

console.log(player1);
console.log(player2);


// Re-Mapped Type
type OptionsFlags<T> = {
    [Property in keyof T]: boolean;
}

interface PlayerInfo{
    name: string;
    age: number;
}

type PlayerInfoOption = OptionsFlags<PlayerInfo>;       //change properties to boolean type



function listenToObject(obj, listeners): void{
    console.log("Wait");
}

const player3: PlayerInfo = {
    name: "GOOD",
    age:14
}

listenToObject(player2, {
    onNameChange: (v: string) => { },
    onAgeChange: (v: number) => { },
})

type Listeners<T> = {
    [Property in keyof T]: (newValue: T[Property]) => string;     //콜백함수 인자를 newValue
}

function listenToObjectGeneric<T>(obj: T, listeners: Listeners<T>): void{
    console.log("Wait");
}

const player4: PlayerInfo = {
    name: "GOOD",
    age:14
}

type PlayerInfoListeners = Listeners<PlayerInfo>;       //name: (newValue: string) => void


//          ***[Property in keyof T]*** 중요!!      //
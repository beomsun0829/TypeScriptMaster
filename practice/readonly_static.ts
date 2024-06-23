class Player{
    public name: string = "";
    public age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// instead

class PlayerEasy{
    constructor(public readonly name: string, public readonly age: number) { }
}

const player5 = new PlayerEasy("Happy", 10);
console.log(player5);
//player5.name = "GOOD"     // readonly stricted



//static

class PlayerList{
    private players: PlayerEasy[] = [];
    static instance: PlayerList = new PlayerList();     //싱글턴 패턴, 특정 클래스가 단 하나만의 인스턴스를 생성하여 사용하기 위한 패턴
    private constructor() { }                           // 추가적인 객체생성을 방지하기 위해 constructor를 private로

    static addPlayer(p: Player) {
        PlayerList.instance.players.push(p);
    }

    getPlayer() {
        return this.players;
    }
}

PlayerList.instance;
PlayerList.addPlayer(player5);

console.log(PlayerList.instance.getPlayer());
//const pl4 = new PlayerList();       // Constructor of class 'PlayerList' is private and only accessible within the class declaration.
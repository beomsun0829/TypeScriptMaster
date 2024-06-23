
function simpleState<T>(initial: T): [() => T, (v: T) => void]{
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
}

const [st1getter, st1setter] = simpleState(1);
console.log(st1getter());
st1setter(2);
console.log(st1getter());

const [st2getter, st2setter] = simpleState<string | null>(null);        //generic override
console.log(st2getter());
st2setter("stringhere");        //no error
console.log(st2getter());


/*
let 이름: unknown;

let 변수1: string = 이름;
let 변수2: boolean = 이름;
let 변수3: number = 이름;
당연히 unknown 타입을 다른 곳에 집어넣으려고 하면

그쪽 실드가 발동해서 에러가 납니다. 

(any는 안그럼)
*/

// 자료집어넣어도 타입은 그대로 unknown입니다.
// function ranker(items: unknown[], rank: (v: unknown) => number): unknown[] {}

// unknown 대신 generic 활용
interface Rank<RankItem>{
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank : rank(item)
    }));

    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map((rank) => rank.item);
}

interface Squid {
    name: string;
    hp: number;
}

const squidGame: Squid[] = [
    {
        name: "Player456",
        hp: 100,
    },
    {
        name: "Player218",
        hp: 90,
    }
]

const squid_ranks = ranker(squidGame, ({ hp }) => hp)
console.log(squid_ranks)
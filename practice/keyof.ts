const squid = [
    {
        name: "Ki-Hoon",
        id: 456,
    },
    {
        name: "Sae-Byuk",
        id: 67
    }
]

// KeyType은 DataType의 키 중에 하나라는 표현
function extract<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][]{
    return items.map(item => item[key])
}

let squid_name = extract(squid, 'name');
console.log(squid_name);


interface DatabaseGeneric<T, K>{
    get(id: string): T;
    set(id: string, value: T): void;   
}

type DBKeyType = string | number | symbol;

class InMemoryDatabaseGeneric<T, K extends DBKeyType> implements DatabaseGeneric<T, K>{
    protected db: Record<K, T> = {} as Record<K,T>; //빈 객체는 아무거나 될 수 있으므로 초기화한 객체 {}를 올바른 타입으로 지정해야함
    get(id: string): T{
        return this.db[id];
    }
    set(id: string, value: T): void{
        this.db[id] = value;
    }
}

const myDB_number = new InMemoryDatabaseGeneric<number, string>();
// myDB_number.set("foo","str");        //Argument of type 'string' is not assignable to parameter of type 'number'
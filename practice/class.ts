interface Database{
    get(id: string): string;
    set(id: string, value: string): void;
}

interface Persistable{
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

//인터페이스 Database를 implements (구현) 했기때문에 내부의 함수들을 실제 코드화 시켜줘야함
class InMemoryDatabase implements Database{
    protected db: Record<string, string> = {};            // 클래스 멤버 db를 private 멤버접근 지정자를 추가하여 밖에서 접근불가능하게

    get(id: string): string{
        return this.db[id];
    }

    set(id: string, value: string): void{
        this.db[id] = value;
    }
}

const myDB = new InMemoryDatabase;

myDB.set("foo", "bas");
//myDB.db["foo"] = "baz";     //클래스 멤버변수인 db에 직접 접근해서 값을 수정, 이러면 클래스를 사용하는 이유 (캡슐화)가 없음

console.log(myDB.get("foo"));



// InMemoryDatabase를 상속하여 모든 멤버변수나 메소드를 이용할 수 있음
// PersistentMemoryDB는 Persistable을 implements(구현)했기 때문에 코드화 작업
class PersistentMemoryDB extends InMemoryDatabase implements Persistable{
    saveToString(): string{
        return JSON.stringify(this.db)      // db 속성이 private일경우 자식클래스에서도 볼 수 없음, protected로 바꾸면 됨
    }

    restoreFromString(storedState: string): void{
        this.db = JSON.parse(storedState)
    }
}

const myDB_p = new PersistentMemoryDB;
myDB_p.set("foo", "bas");

console.log(myDB_p.get("foo"));
console.log(myDB_p.saveToString());
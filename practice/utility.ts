
// Partical<Type>
interface MyUser{
    name: string;
    id: string;
    email?: string;
    phone?: string;
}

/*
interface MyUserOptionals{
    name?: string;
    id?: string;
    email?: string;
}
*/

type MyUserOptionals = Partial<MyUser>      // to optional
type RequiredMyUser = Required<MyUser>      // to require
type JustEmailAndName = Pick<MyUser, "email" | "name">  // name or email only

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

// 첫번째 객체에 두번째 객체를 덮어쓰기
console.log(merge(
    {
        name: "Ki-hun",
        id: "456",
        email: "kihun@squid.com"
    },
    {
        email:"jungkihun@squid.com"
    }

))


// Record
const mapById = (users: MyUser[]): Record<string, MyUser> => {
    return users.reduce((a, v) => {
        return {
            ...a,
            [v.id]: v,
        }
    }, {})
}

console.log(mapById([
    { id: "foo", name: "Mr. Foo" },
    { id: "baz", name: "Mr. Baz" }
]));



//Omit

type UserWithoutID = Omit<MyUser, "id">;

const mapByIdOmit = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
    return users.reduce((a, v) => {
        const {id, ...other} = v;
        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapByIdOmit([
    { id: "foo", name: "Mr. Foo" },
    { id: "baz", name: "Mr. Baz" }
]))
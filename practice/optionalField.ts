interface User{
    id: string;
    info?: {
        name?: string;
        email?: string;
    }
}


// user? -> user?.info?가 있으면 email return
// ?? : 널 병합 연산자, 왼쪽 피연산자가 null 또는 undefined일때 오른쪽 피연산자를 반환, 그렇지 않으면 왼쪽 그대로 반환
function getEmailEasy(user: User): string{
    return user?.info?.email ?? "";
}

console.log(getEmailEasy({ id: "1", }))
console.log(getEmailEasy({ id: "2", info: { name: "fall" } }));
console.log(getEmailEasy({ id: "3", info: { email: "a" } }));
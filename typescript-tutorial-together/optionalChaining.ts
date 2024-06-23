
const getName = (user: { first: string; last: string; }): string =>
    `${user?.first} ${user?.last}`;

//console.log(getName());   // runtime error
console.log(getName({ first: "name", last: "my" }));

// user?.first 옵셔널 체이닝을 넣었더니 컴파일된 자바스크립트 코드에서
// user 타입을 조사 하여 undefined 반환, 안하면 error

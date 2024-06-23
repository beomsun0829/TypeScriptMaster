// Promise

const fetchData = (url: string) : Promise<string> =>
    Promise.resolve(`Data from ${url}`)

console.log(fetchData("google.com"));
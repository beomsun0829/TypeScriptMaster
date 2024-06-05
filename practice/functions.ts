
// function
function addNumbers(a: number, b: number) {
    return a + b;
}
export default addNumbers;


//const function
export const addStrings = (str1: string, str2: string = "DefaultString"): string => `${str1} | ${str2}`;


// Union Type
export const format = (str1: string, str2: number | string): string => `${str1} _ ${str2}`;


// No return type (void)
export const printFormat = (title: string, param: string|number):void => console.log(`${title} ${param}`)
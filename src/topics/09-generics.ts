export function whatsMyType<T>(argument: T): T {

    return argument

}

const amIString = whatsMyType<string>("Hello World");
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
const amINumber = whatsMyType<number>(42);

console.log(amIString.split(' ')); // "Hello World"
console.log(amINumber.toFixed()); // "42.00"
console.log(amIArray.join('-')); // 5
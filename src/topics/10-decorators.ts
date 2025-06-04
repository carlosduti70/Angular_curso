// function classDecorator(
//     constructor: any
// ) {
//     return class extends constructor {
//         newProperty: string = 'new property';
//         hello: string = 'override';

//     }
// }




// @classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('hola mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass); // "Abc123"
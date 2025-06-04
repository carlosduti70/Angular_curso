

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'no address'
    ) { }

}

export class Hero{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person : Person,
    ) {  }
}


const tony = new Person("John Doe", "123 Main St");

const ironman = new Hero("Ironman", 45, "Tony Stark", tony);


console.log(ironman);
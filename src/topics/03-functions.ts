

function addNumbers(a: number, b: number){
    return a + b;
}

const addnumbersArrow = (a: number, b: number) => {
    return `${a + b}`;
}


function multiply( firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}


// const result = addNumbers(1,7)
// const result2 = addnumbersArrow(1,7)
// const result3 = multiply(5)
// console.log({result, result2, result3})

interface Character {
    name: string,
    hp: number,
    showHP: () => void,
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const batman: Character = {
    name: 'Batman',
    hp: 60,
    showHP() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}


healCharacter(batman, 20)
healCharacter(batman, 50)
healCharacter(batman, 50)
batman.showHP();
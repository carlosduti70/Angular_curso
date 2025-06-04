
const skill: string[] = ['bash', 'counter', 'healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string
}

const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'Counter']
};

strider.hometown = 'paleta'

console.table(strider)

export { }
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Carlos',
    // children: [],
}

const passenger2: Passenger = {
    name: 'Matias',
    children: ['Carlos', 'David', 'Joss', 'Karol'],
}

const totalChildren = (passenger: Passenger) => {

    const childrenCount = passenger.children?.length || 0; ;
    console.log(passenger.name, childrenCount);
}

totalChildren(passenger1)
import { taxCalculator, type Product } from './06-function-destructuring';




const shppingCart: Product[] = [
    {
        description: 'Nokia 3310',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 250.0
    }
];

const [total, totalTax] = taxCalculator({products: shppingCart, tax: 0.15});
console.log(`Total:`, total);
console.log(`Tax:`, totalTax);
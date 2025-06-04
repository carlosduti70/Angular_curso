
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia 3310',
    price: 150.0
};
const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
};

interface TaxOptions {
    tax: number;
    products: Product[];
}


// function taxCalculator(options: TaxOptions): [number, number] {
// function taxCalculator({ tax, products }: TaxOptions): [number, number] {
export function taxCalculator(options: TaxOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];

}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculator({
    products: shoppingCart,
    tax: tax
})

console.log(`Total:`, total);
console.log(`Tax:`, totalTax);
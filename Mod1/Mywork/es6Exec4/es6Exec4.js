/*Description: window onload Init script to create web page using ES6 features
 *Author: HartCode Programmer
 *Date:08/22/2019
 */
let mittai = [{
        product: "Gummy Worms",
        price: 5.79
    },
    {
        product: "Plain M&Ms",
        price: 2.89
    },
    {
        product: "kucchi mittai",
        price: 3.99
    },
    {
        product: "kuruvi rotti",
        price: 5.45
    },
    {
        product: "Murukku",
        price: 5.59
    },
    {
        product: "Yelladai",
        price: 1.99
    },
    {
        product: "Mittai",
        price: 2.79
    },
    {
        product: "Appalam",
        price: 0.99
    },
    {
        product: "Then Mittai",
        price: 1.19
    },
    {
        product: "Bubble Gum",
        price: 0.50
    }
];

// usage of array function for sort
mittai.sort((p1, p2) => {
    if (p1.price > p2.price) {
        return 1;
    }
    return -1;
});
let [first, second, third, ...rest] = mittai;
console.log('First Smallest:' + first.price + '\n' + 'Second Smallest:' + second.price + '\n' + 'Third Smallest:' + third.price);


mittai.sort((p1, p2) => p1.price < p2.price);
[first, second, third, ...rest] = mittai;

console.log('First Largest:' + first.price + '\n' + 'Second Largest:' + second.price + '\n' + 'Third Largest:' + third.price);
// ${second}  ${third}');

// Below function is not used in this, as we used arrow function
function comparePrices(obj1, obj2) {
    if (obj1.price > obj2.price) {
        return 1;
    }
    return -1;
}
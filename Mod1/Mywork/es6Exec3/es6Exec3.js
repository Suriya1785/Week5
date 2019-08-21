/*Description: window onload Init script to create web page using ES6 features
 *Author: HartCode Programmer
 *Date:08/21/2019
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

// Filter returns an empty array if it does not find any item for the given condition
let result = mittai.filter(p => p.price > 10);

if (result.length != 0) {
    result.forEach(element => {
        console.log(element.product, element.price)
    });
} else {
    console.log("No match");
}

// Find return an first element matching the criteria or returns null if it does not find a match
// let findResult = mittai.find(p => p.price > 10);

let findResult = mittai.find(p => {
    if (p.price > 5) {
        return p;
    }
})

if (findResult != null) {
    console.log(findResult.product + "\n" + findResult.price);
} else {
    console.log('No match');
}
const { reduce } = require("lodash");

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//    console.log(`acc: ${acc} currval: ${currval}`);
//    return acc + currval
// },0)

const myTotal = myNums.reduce((acc, currval) => acc + currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },

    {
        itemName: "rust course",
        price: 4999
    },

    {
        itemName: "data science course",
        price: 3999
    },
]

const priceTopay = shoppingCart.reduce((acc , item) => acc + item.price ,0)

console.log(priceTopay);   

// const myNums = [1, 2, 3];

// const totalval = myNums.reduce((acc, currVal)=>{
//     console.log(`acc is ${acc} and currVal is ${currVal}`)
//     return acc + currVal;
// }, 0)


// console.log(totalval);

const shoppingCart = [
    {
        itemName : " js course",
        price : 2999
    },
    {
        itemName : " python ",
        price : 999
    },
    {
        itemName : " mobile dev course",
        price : 12999
    },
    {
        itemName : " data scientist course",
        price : 15999
    }
]

const total= shoppingCart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0)

console.log(total)
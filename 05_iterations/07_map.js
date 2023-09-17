const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {
//  return num /10});

// console.log(newNums);

// const newNums = [];

// myNums.forEach((num)=>{
    //         newNums.push(num * 20);
    // })
// console.log(newNums);

const newNum = myNums
                .map((num)=> num * 20)
                .map((num)=> num +3)
                .map((num)=> num -1)
                .filter((num)=> num>100)

console.log(newNum);
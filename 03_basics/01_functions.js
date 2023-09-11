function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){ // username === undefined
        console.log("Please enter a valid username")
        return

    }
    return `${username} is logged in`
}

// console.log(loginUserMessage("Farhan Basharat"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(299, 400, 500))

let newUser = {
    name : "Farhan",
    age : 38,
    email : "farhan@gmail.com"
}

function infoAboutUser(aboutUser){
    return `${aboutUser.name} is ${aboutUser.age} years old and his email is ${aboutUser.email}`

}

console.log(infoAboutUser({
    name : "Irfan",
    age : 36,
    email: "irfan@gmail.com"
}));

let newArr=[200, 300, 400,500];

function newArrIntoFunc(newArray){
    return newArray[0];
}

console.log(newArrIntoFunc([1,3,46]));
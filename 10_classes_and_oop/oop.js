const user = {              // This is Object literal
    username : "Farhan",    // these are properties
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()    // new keyword is constructor function

function User(username, logInCount, loggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.loggedIn = loggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Farhan", 20, true)
const userTwo = new User("Dua", 25, false)
console.log(userOne.constructor);
// console.log(userTwo)

// when we use "new" keyword an empty object is created called instance
// constructor function is called upon new keywords it packs all the arguments and deliver
// this keyword injects all arguments
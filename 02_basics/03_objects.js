// Two ways to declare Objects Literal and Constructor
// singleton... constructor makes a singleton but literal does not
// Object.create makes constructor Object

// Object Literal

const mySyb = Symbol("key1");

const JsUser = {
    name: "Farhan",
    "Full name" : "Farhan Basharat",
    age: 18,
    [mySyb] : "mykey1",
    location: "Jaipur",
    email: "Farhan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySyb]);

// JsUser.email = "FarhanBasharat@outlook.com"
// Object.freeze(JsUser);
// JsUser.email="afsda@gmail.com"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello js user from greeting");
}
JsUser.greetingTwo= function(){
    console.log(`Hello js user ${JsUser["Full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
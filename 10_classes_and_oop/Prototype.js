let myName = "Farhan     "
let myChannel = "Chai          "

// console.log(myName.trim().length);

Object.prototype.trueLength = function(){
    console.log(`My length is ${this.trim().length}`)
}

// myChannel.trueLength()
// myName.trueLength()

let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'slang',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    },
    
}

Object.prototype.farhan = function(){
// console.log(`Farhan is present in all Objects`)
}

// heroPower.farhan()
// myHeros.farhan()

Array.prototype.heyFarhan= function(){
    console.log(`Farhan says hello`);
}

// myHeros.heyFarhan()
// heroPower.heyFarhan()

// inheritance

const User={
    name:'chai',
    email:'chai@gmail.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvaliable : false
}

const TASupport = {
    makeAssignment: "JS Assigment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// modern Syntex

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiaurCode          "

String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"Farhan           ".trueLength()
"icetea".trueLength()
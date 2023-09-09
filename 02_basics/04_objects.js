// Singleton... via constructor

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser= {
    email : "someone@gmail.com",
    fullName : {
        userfullname: {
            firstname : "Farhan",
            lastname : "Basharat"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}
const obj4 = { 5:"t", 6:"i"}


// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename : "Js in Hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// courseInstructor repeation

const {courseInstructor : instructor} = course;

console.log(instructor);



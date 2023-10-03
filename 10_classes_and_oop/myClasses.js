// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return (`${this.password}ABC*(&)`);
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

//     changeEmail(){
//         return `${this.email.toLowerCase()}`
//     }

// }

const chai = new User("Chai", "FARHAN@gmail.com", 'Fisle5443')

// console.log(chai.changeUsername())
// console.log(chai.encryptPassword());
// console.log(chai.changeEmail());

// behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword= function(){
    return (`${this.password}ABC*(&)`);
}

User.prototype.changeEmail= function(){
    return `${this.email.toLowerCase()}`
}

User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const newChai = new User("farhanbasharat", "FARHAN@GMAIL.COM", "asdfe")

console.log(newChai.changeEmail())
console.log(newChai.changeUsername())
console.log(newChai.encryptPassword())
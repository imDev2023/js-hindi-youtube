class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // logMe.call(this, username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Farhan", "farhan@gmail.com", "asdf34343434")

chai.addCourse()

const masalChai = new User("masalaChai")

masalChai.logMe()
chai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
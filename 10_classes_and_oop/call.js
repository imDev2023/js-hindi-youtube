function SetUsername (username){
    // complex DB Calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password= password
}

const chai = new createUser("chair", "chair@fb.com", "1234")

console.log(chai);
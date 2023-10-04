const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI)

// console.log(descriptor)

const chai = {
    name : 'ginger Chai',
    price : 250,
    isAvailable : true,

        orderChai : function(){
            console.log("Chai nahi bani")
        }
}


Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable : true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
        
    }

// for of

const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
    if( num == 3){
        continue;
    }
}

const greetings = "Hello Worlds";

for (const greet of greetings) {
    // console.log(`lets see the value of ${greet}`);
}

// Maps

const map = new Map()
map.set ("PK","Pakistan");
map.set ("IN","India");
map.set ("SR","Sri Lanka");
map.set ("UK", "United Kingdom");

// console.log(map);

for (const [key, value] of map) {

    console.log(`${key} :- ${value}`);
    
}

// for in loop is used mostly for OBJECTS


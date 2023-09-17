// for in loop is used mostly for OBJCECTS

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: " swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} stands for ${myObject[key]}`);
}


const programming = ['js','rb','py']

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set ("PK","Pakistan");
map.set ("IN","India");
map.set ("SR","Sri Lanka");
map.set ("UK", "United Kingdom");


for (const [key] in map) {
//    console.log(key);
        // Cannot use for in loop on map like this
} 

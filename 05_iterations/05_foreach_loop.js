const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(element => {

    // console.log(element)
    
});

const myCoding =[
    {
        fileName : "javascript",
        file: "js"
    },
    {
        fileName : "python",
        file: "py"
    },
    {
        fileName : "java",
        file: "java"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.file} is called ${item.fileName}`)
})
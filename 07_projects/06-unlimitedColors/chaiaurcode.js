// generate random color

const randomColor =()=>{
    const hex = '123456ABCDEF'
    let color = '#'
    for(i=0; i<6; i++){
        color +=Math.floor(Math.random()*16)
    }
}


const startChangingColor=()=>{
    document.querySelector("#start").addEventListener('click', randomColor)

}
const stopChangingColor=()=>{

}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#start").addEventListener('click', stopChangingColor)
  
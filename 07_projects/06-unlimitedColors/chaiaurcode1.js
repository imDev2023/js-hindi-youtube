// generate random color

const randomColor =()=>{
    const hex = '0123456789ABCDEF'
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}


const startChangingColor= function(){

    

    const changeBgColor=()=>{
    document.body.style.backgroundColor = randomColor();
    }
    setInterval(changeBgColor, 2000);
};

const stopChangingColor=()=>{

}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)
  


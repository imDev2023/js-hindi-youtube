const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

let date = new Date();

setInterval(()=>{

    clock.innerHTML = date.toLocaleTimeString()

}, 1000)
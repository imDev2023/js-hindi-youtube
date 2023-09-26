const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height ==='' || height <=0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    } else if(weight ==='' || weight <=0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    }
    else{
        const bmi = (weight/ ((height * height) / 10000)).toFixed(2);
        
        if(bmi <= 18.6){
            results.innerHTML = `${bmi} shows you are underweight`
            
        }
        if(bmi >= 24.9){
            results.innerHTML = `${bmi} shows you are Obese`
        }
        if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `${bmi} shows you are in normal range`
        
        }
    }

    

})
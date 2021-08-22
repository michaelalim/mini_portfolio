// woo JS 🥳

const inputEl = document.getElementById("input");
const energyMeter = document.getElementById("energy");
const emojis = document.querySelectorAll(".emoji");

inputEl.addEventListener("input", function (){
    energyMeter.value = inputEl.value;
    
    if(energyMeter.value < 3){
    document.body.style.background = "red";
    } else if (energyMeter.value >= 3 && energyMeter.value <= 6){
    document.body.style.background = "orange";
    } else {
    document.body.style.background = "green";
    };
    
    for (let i = 0; i < emojis.length; i++){
        if(energyMeter.value < 3){
        emojis[i].textContent = "😪";
        } else if (energyMeter.value >= 3 && energyMeter.value <= 6){
        emojis[i].textContent = "🙂";
        } else {
        emojis[i].textContent = "😄";
    };
    };
});


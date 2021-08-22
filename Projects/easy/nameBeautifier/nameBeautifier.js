// I just linked the randomcolor() at html and somehow it works

// const darkColor = ["#660033", "#660066", "#330066", "#000066", "#003366", "#006666", "#006633", 
// "#006600", "#336600", "#660000", "#663300", "#660000"];
// const brightColor = ["#ff66b2", "#ff66ff", "#b266ff", "#6666ff", "#66b2ff", "#6666ff", "#66ffb2",
// "#66ff66", "#b2ff66", "#ffff66", "#ffb266", "#ff6666"];

const name = document.getElementById("name");
const btn = document.getElementById("beautifierBtn");
const labels = document.querySelectorAll(".label-el")

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ];

btn.addEventListener("click", function(){
   const darkColor = randomColor({luminosity: 'dark'});
   const brightColor = randomColor({luminosity: 'light'});
   
   const rndFontIndex = Math.floor(Math.random()*5);
   const rndFont = fontsArr[rndFontIndex];
   name.style.fontFamily = rndFont;
   btn.style.fontFamily = rndFont;
   
   name.style.color = darkColor;
   btn.style.background = darkColor;
   
   const rndFWeight = (Math.floor(Math.random()*9+1)*100);
   name.style.fontWeight = rndFWeight;
   btn.style.fontWeight = rndFWeight;
   
   document.body.style.background = brightColor;
   btn.style.color = brightColor;
   
   labels[0].textContent = `Name Hex Color: ${darkColor}`;
   labels[1].textContent = `Font: ${fontsArr[rndFontIndex]}`;
   labels[2].textContent = `Font Weight: ${rndFWeight}`;
   labels[3].textContent = `BG Hex Color: ${brightColor}`;
   
   for (let i = 0; i < labels.length; i++){
       labels[i].style.fontFamily = rndFont;
       labels[i].style.color = darkColor;
       labels[i].style.fontWeight = rndFWeight;
   };
});
    
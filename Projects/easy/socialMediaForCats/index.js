const main = document.getElementById("cat-div")


const catArr = [
    {
        name: "Cruella",
        pic: "imgs/Cruella.png"
    },
    {
        name: "Pumpkin",
        pic: "imgs/Pumpkin.jpeg"
    },
    {
        name: "Snuglles",
        pic: "imgs/Snuggles.png"
    }
];

catArr.forEach(catFunction => {
    const background = document.createElement("div");
    background.classList.add("background");
    main.appendChild(background);

    const cat = document.createElement("img");
    cat.classList.add("pic-cont");
    cat.src = catFunction.pic;
    background.appendChild(cat);

    const catName = document.createElement("h3");
    catName.classList.add("catName");
    catName.textContent = catFunction.name;
    background.appendChild(catName);

    const love = document.createElement("span");
    love.classList.add("material-icons-outlined");
    love.textContent = "favorite";
    background.appendChild(love);

    love.addEventListener("click", lovedIt);
    function lovedIt() {
        love.classList.toggle("favorited");
    }

    cat.addEventListener("click", seeCat);
    function seeCat() {
        cat.classList.toggle("wowNiceCat")
    }
})


    
       

  
const btns = document.querySelectorAll("[type=radio]");
const main = document.getElementById("section-body");

const projectArr = [
    {projectName: "Energy Meter", 
    link: "easy/energyMeter/index.html", 
    screen:"easy/energyMeter/energyMeter.gif", 
    dif:"eas", ref: "scr", lang: "js"},

    {projectName: "Name Beautifier", 
    link: "easy/nameBeautifier/index.html", 
    screen:"easy/nameBeautifier/nameBeautifier.gif", 
    dif:"eas", ref: "scr", lang: "js"},

    {projectName: "Social Media for Cats", 
    link: "moderate/socialMediaForCats/index.html", 
    screen:"moderate/socialMediaForCats/socialMediaForCats.gif", 
    dif:"mod", ref: "scr", lang: "js"},

    {projectName: "Simple Login Form (Front End)", 
    link: "easy/basicLoginScreen/index.html", 
    screen:"easy/basicLoginScreen/loginForm.gif", 
    dif:"eas", ref: "oth", lang: "css"}    
];

showProject(projectArr)

// the value of the radio buttons should be the same sa dif/ref/lang sang objects
function filterProjs () {
    const diff = document.querySelector("#diff-div input[type=radio]:checked").value;
    const res = document.querySelector("#res-div input[type=radio]:checked").value;
    const lgg = document.querySelector("#lang-div input[type=radio]:checked").value;
    const isAllDiff = document.querySelector("#dif-allbtn").checked;
    const isAllRes = document.querySelector("#res-allbtn").checked;
    const isAllLgg = document.querySelector("#lang-allbtn").checked;

    const filteredArr = projectArr.filter((p) => {
        
            if (isAllDiff && isAllRes && isAllLgg){
                return p
            } else if (diff == p.dif && isAllRes && isAllLgg){
                return diff
            } else if (isAllDiff && res === p.ref && isAllLgg){
                return res
            } else if (isAllDiff && isAllRes && lgg === p.lang){
                return lgg
            } else if (diff === p.dif && res === p.ref && isAllLgg){
                return (diff && res)
            } else if (diff === p.dif && isAllRes && lgg === p.lang){
                return (diff && lgg)
            } else if (isAllDiff && res === p.ref && lgg === p.lang){
                return (res && lgg)
            } else if (diff === p.dif && res === p.ref && lgg === p.lang){
                return (diff && res && lgg)
            }
    })
    
    showProject(filteredArr)

};

function showProject(arr) {

    arr.forEach(project => {

        const card = document.createElement("div");
        card.classList.add("project-card");
        main.appendChild(card);

        card.innerHTML = `<a target="_blank" href="${project.link}"><div class = "project-card"><img class="gifScreen" 
        src="${project.screen}"></a>`

        const title = document.createElement("h2");
        title.classList.add("project-title");
        title.textContent = project.projectName;
        card.appendChild(title);

        removeCards(main, card);

    })
}

btns.forEach((btn) => {
    btn.addEventListener("click", filterProjs);
    
});

function removeCards(content, frame) {
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            content.removeChild(frame);
        })
    })
}
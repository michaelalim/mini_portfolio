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

    {projectName: "Transparent Login Form", 
    link: "easy/basicLoginScreen/index.html", 
    screen:"easy/basicLoginScreen/loginForm.gif", 
    dif:"eas", ref: "oth", lang: "css"}, // wds
    
    {projectName: "CSS-Made Emoji & Tooltip", 
    link: "moderate/cssTooltipsEmoji/index.html", 
    screen:"moderate/cssTooltipsEmoji/cssTooltips.gif", 
    dif:"mod", ref: "oth", lang: "css"}, //wds

    {projectName: "Magic 8 Ball", 
    link: "moderate/magicBall/index.html", 
    screen:"moderate/magicBall/magicBall.gif", 
    dif:"mod", ref: "scr", lang: "js"},

    {projectName: "Button Animation", 
    link: "moderate/buttonAnimation/index.html", 
    screen:"moderate/buttonAnimation/buttonAnimation.gif", 
    dif:"mod", ref: "oth", lang: "css"}    
];

//randomizing the order of my projects 
for (let i = 0; i < Math.ceil(projectArr.length / 2); i++){
    let firstFilter = projectArr[0];
    projectArr.splice(0, 1);
    projectArr.splice(Math.floor(Math.random()*projectArr.length), 0, firstFilter);

    let lastFilter = projectArr[projectArr.length - 1];
    projectArr.splice(projectArr.length - 1, 1);
    projectArr.splice(Math.floor(Math.random()*projectArr.length), 0, lastFilter);
}

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
    
    // this is to clear the body every time showProject is ran
    main.textContent = "";

    arr.forEach(project => {

        const card = document.createElement("div");
        card.classList.add("project-card");
        main.appendChild(card);

        card.innerHTML = `<a href="${project.link}"><div class = "project-card"><img class="gifScreen" 
        src="${project.screen}"></a>`

        const title = document.createElement("h2");
        title.classList.add("project-title");
        title.textContent = project.projectName;
        card.appendChild(title);

    })

}

btns.forEach((btn) => {
    btn.addEventListener("click", filterProjs);
});

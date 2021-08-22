const main = document.getElementById("section-body");
const allDiffBtn = document.getElementById("dif-allbtn");
const easyBtn = document.getElementById("easybtn");
const modBtn = document.getElementById("moderatebtn");
const hardBtn = document.getElementById("hardbtn");
const allResBtn = document.getElementById("res-allbtn");
const scrBtn = document.getElementById("scrimbabtn");
const othBtn = document.getElementById("othersbtn");
const allLangBtn = document.getElementById("lang-allbtn");
const cssBtn = document.getElementById("cssbtn");
const jsBtn = document.getElementById("jsbtn");
const buttons = document.querySelectorAll(".button");

const projectArr = [
    {projectName: "Energy Meter", link: "easy/energyMeter/index.html", screen:"easy/energyMeter/energyMeter.gif", dif:"easy", ref: "scr", lang: "js"},
    {projectName: "Name Beautifier", link: "easy/nameBeautifier/index.html", screen:"easy/nameBeautifier/nameBeautifier.gif", dif:"easy", ref: "scr", lang: "js"},
    {projectName: "Social Media for Cats", link: "moderate/socialMediaForCats/index.html", screen:"moderate/socialMediaForCats/socialMediaForCats.gif", dif:"mod", ref: "scr", lang: "js"},
    {projectName: "Simple Login Form (Front End)", link: "easy/basicLoginScreen/index.html", screen:"easy/basicLoginScreen/loginForm.gif", dif:"easy", ref: "oth", lang: "css"}    
];

const cssArr = projectArr.filter(p => p.lang === "css");
const jsArr = projectArr.filter(p => p.lang === "js");
const scrArr = projectArr.filter(p => p.ref === "scr");
const ascArr = projectArr.filter(p => p.ref === "scr" && p.lang === "css");
const asjArr = projectArr.filter(p => p.ref === "scr" && p.lang === "js");
const othArr = projectArr.filter(p => p.ref === "oth");
const aocArr = projectArr.filter(p => p.ref === "oth" && p.lang === "css");
const aojArr = projectArr.filter(p => p.ref === "oth" && p.lang === "js");
const easyArr = projectArr.filter(p =>  p.dif === "easy");
const eacArr = projectArr.filter(p => p.dif === "easy" && p.lang === "css");
const eajArr = projectArr.filter(p => p.dif === "easy" && p.lang === "js");
const esaArr = projectArr.filter(p => p.dif === "easy" && p.ref === "scr");
const escArr = projectArr.filter(p => p.dif === "easy" && p.ref === "scr" && p.lang === "css");
const esjArr = projectArr.filter(p => p.dif === "easy" && p.ref === "scr" && p.lang === "js");
const eoaArr = projectArr.filter(p => p.dif === "easy" && p.ref === "oth");
const eocArr = projectArr.filter(p => p.dif === "easy" && p.ref === "oth" && p.lang === "css");
const eojArr = projectArr.filter(p => p.dif === "easy" && p.ref === "oth" && p.lang === "js");
const modArr = projectArr.filter(p => p.dif === "mod");
const macArr = projectArr.filter(p => p.dif === "mod" && p.lang === "css");
const majArr = projectArr.filter(p => p.dif === "mod" && p.lang === "js");
const msaArr = projectArr.filter(p => p.dif === "mod" && p.ref === "scr");
const mscArr = projectArr.filter(p => p.dif === "mod" && p.ref === "scr" && p.lang === "css");
const msjArr = projectArr.filter(p => p.dif === "mod" && p.ref === "scr" && p.lang === "js");
const moaArr = projectArr.filter(p => p.dif === "mod" && p.ref === "oth");
const mocArr = projectArr.filter(p => p.dif === "mod" && p.ref === "oth" && p.lang === "css");
const mojArr = projectArr.filter(p => p.dif === "mod" && p.ref === "oth" && p.lang === "js");
const hardArr = projectArr.filter(p => p.dif === "hard");
const hacArr = projectArr.filter(p => p.dif === "hard" && p.lang === "css");
const hajArr = projectArr.filter(p => p.dif === "hard" && p.lang === "js");
const hsaArr = projectArr.filter(p => p.dif === "hard" && p.ref === "scr");
const hscArr = projectArr.filter(p => p.dif === "hard" && p.ref === "scr" && p.lang === "css");
const hsjArr = projectArr.filter(p => p.dif === "hard" && p.ref === "scr" && p.lang === "js");
const hoaArr = projectArr.filter(p => p.dif === "hard" && p.ref === "oth");
const hocArr = projectArr.filter(p => p.dif === "hard" && p.ref === "oth" && p.lang === "css");
const hojArr = projectArr.filter(p => p.dif === "hard" && p.ref === "oth" && p.lang === "js");

showProject(projectArr);

buttons.forEach((b) => {
    b.addEventListener("click", () => {
        callProjects();
    })
})

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

        buttons.forEach((b) => {
            b.addEventListener("click", () => {
                main.removeChild(card);
            })
        })
    })
}

function callProjects() {
    if (allDiffBtn.checked){
        if(allResBtn.checked){
            if(allLangBtn.checked){
                showProject(projectArr);
            } else if (cssBtn.checked){
                showProject(cssArr);
            } else if (jsBtn.checked){
                showProject(jsArr);
            }
        } else if (scrBtn.checked){
            if(allLangBtn.checked){
                showProject(scrArr);
            } else if (cssBtn.checked){
                showProject(ascArr);
            } else if (jsBtn.checked){
                showProject(ascArr);
            }
        } else if (othBtn.checked){
            if(allLangBtn.checked){
                showProject(othArr);
            } else if (cssBtn.checked){
                showProject(aocArr);
            } else if (jsBtn.checked){
                showProject(aojArr);
            }
        }
    } else if (easyBtn.checked){
        if(allResBtn.checked){
            if(allLangBtn.checked){
                showProject(easyArr);
            } else if (cssBtn.checked){
                showProject(eacArr);
            } else if (jsBtn.checked){
                showProject(eajArr);
            }
        } else if (scrBtn.checked){
            if(allLangBtn.checked){
                showProject(esaArr);
            } else if (cssBtn.checked){
                showProject(escArr);
            } else if (jsBtn.checked){
                showProject(esjArr);
            }
        } else if (othBtn.checked){
            if(allLangBtn.checked){
                showProject(eoaArr);
            } else if (cssBtn.checked){
                showProject(eocArr);
            } else if (jsBtn.checked){
                showProject(eojArr);
            }
        }    
    } else if (modBtn.checked){
        if(allResBtn.checked){
            if(allLangBtn.checked){
                showProject(modArr);
            } else if (cssBtn.checked){
                showProject(macArr);
            } else if (jsBtn.checked){
                showProject(majArr);
            }
        } else if (scrBtn.checked){
            if(allLangBtn.checked){
                showProject(msaArr);
            } else if (cssBtn.checked){
                showProject(mscArr);
            } else if (jsBtn.checked){
                showProject(msjArr);
            }
        } else if (othBtn.checked){
            if(allLangBtn.checked){
                showProject(moaArr);
            } else if (cssBtn.checked){
                showProject(mocArr);
            } else if (jsBtn.checked){
                showProject(mojArr);
            }
        } 
    } else if (hardBtn.checked){
        if(allResBtn.checked){
            if(allLangBtn.checked){
                showProject(hardArr);
            } else if (cssBtn.checked){
                showProject(hacArr);
            } else if (jsBtn.checked){
                showProject(hajArr);
            }
        } else if (scrBtn.checked){
            if(allLangBtn.checked){
                showProject(hsaArr);
            } else if (cssBtn.checked){
                showProject(hscArr);
            } else if (jsBtn.checked){
                showProject(hsjArr);
            }
        } else if (othBtn.checked){
            if(allLangBtn.checked){
                showProject(hoaArr);
            } else if (cssBtn.checked){
                showProject(hocArr);
            } else if (jsBtn.checked){
                showProject(hojArr);
            }
        } 
    }
};
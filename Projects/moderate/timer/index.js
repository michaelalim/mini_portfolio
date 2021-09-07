const timer = document.getElementById("time-display");
const workBtn = document.getElementById("work-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const pauseBtn = document.getElementById("pause-btn");
const resumeBtn = document.getElementById("resume-btn");
const stopBtn = document.getElementById("stop-btn");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings-screen");
const lbtTimer = document.getElementById("lbt-timer");
const sbtTimer = document.getElementById("sbt-timer");
const wtTimer = document.getElementById("wt-timer");
const saveBtn = document.getElementById("save-btn");

let time, minutes, seconds, countdown;

let longBTimer = lbtTimer.value * 60;
let shortBTimer = sbtTimer.value * 60;
let wTimer = wtTimer.value * 60;

wtTimer.addEventListener("input", () => {
    wTimer = wtTimer.value * 60;
})

sbtTimer.addEventListener("input", () => {
    shortBTimer = sbtTimer.value * 60;
})

lbtTimer.addEventListener("input", () => {
    longBTimer = lbtTimer.value * 60;
})

workBtn.addEventListener("click", () => {
    time = wTimer;
    setTime(time);
    workBtn.style.display = "none";
    resumeBtn.style.display = "initial";
});

shortBreakBtn.addEventListener("click", () => {
    time = shortBTimer;
    setTime(time);
});

longBreakBtn.addEventListener("click", () => {
    time = longBTimer;
    setTime(time);
});

stopBtn.addEventListener("click", () => {
    workBtn.style.display = "initial";
    resumeBtn.style.display = "none";
    clearInterval(countdown);
    timer.textContent = `0:00`;
    minutes = 0;
    seconds = 0;
})

settingsBtn.addEventListener("click", () => {
    if (settings.style.display === "block"){
        settings.style.display = "none";
    } else {
        settings.style.display = "block";
    }
})


function setTime(time){
    clearInterval(countdown);
    countdown = setInterval(runTimer, 1000);
}

function runTimer() {

    minutes = Math.floor(time / 60);
    seconds = time % 60;
    
    if (seconds < 10){
        timer.textContent = `${minutes}:0${seconds}`;
    } else {
        timer.textContent = `${minutes}:${seconds}`;
    }
    
    if (time === 0){
        clearInterval(countdown);
        workBtn.style.display = "initial";
        resumeBtn.style.display = "none";
    }
    
    pauseBtn.addEventListener("click", () => {
       clearInterval(countdown);
       if (seconds < 10){
        timer.textContent = `${minutes}:0${seconds}`;
    } else {
        timer.textContent = `${minutes}:${seconds}`;
    }
    });
    
    resumeBtn.addEventListener("click", () => {
        setTime(time);
    })
    
    time--;
    
};

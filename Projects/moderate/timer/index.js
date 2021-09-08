// Simple solution but I'm definitely satisfied with it. You can do settings on the top right to adjust with your own preference of timers.

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
const statusEl = document.getElementById("status-el");
const closeSettingsBtn = document.getElementById("close-settings");

let time, minutes, seconds, countdown;
let message, dots;

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
    
    message = "Currently working"
    displayStatus(message);
    statusEl.style.left = "8%";
    
    stopBtn.addEventListener("click", clearStatus);
});

shortBreakBtn.addEventListener("click", () => {
    time = shortBTimer;
    setTime(time);
    
    message = "Taking a short break"
    displayStatus(message);
    statusEl.style.left = "4%";
    
    stopBtn.addEventListener("click", clearStatus);
});

longBreakBtn.addEventListener("click", () => {
    time = longBTimer;
    setTime(time);
    
    message = "Having a good long break"
    displayStatus(message);
    statusEl.style.left = "2%";
    
    stopBtn.addEventListener("click", clearStatus);
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
    
    if (closeSettingsBtn.style.display === "block"){
        closeSettingsBtn.style.display = "none";
    } else {
        closeSettingsBtn.style.display = "block";
    }
})

closeSettingsBtn.addEventListener("click", () => {
    closeSettingsBtn.style.display = "none";
    settings.style.display = "none";
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

function displayStatus(msg){
    statusEl.textContent = msg;
    dots = setInterval(() => {
        if(statusEl.textContent !== msg + "..."){
            statusEl.textContent += "."
        } else {
            statusEl.textContent = msg
        }
    }, 500)
}

function clearStatus(){
    statusEl.textContent = "";
    clearInterval(dots);
}

function pauseDots(){
    clearInterval(dots);
}
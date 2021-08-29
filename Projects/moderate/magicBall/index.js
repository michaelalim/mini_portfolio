const quote = [
    "No one can determine another’s destiny. ",
  
    "Sometimes You Must Hurt In Order To Know, Fall In Order To Grow, Lose In Order To Gain, Because Life’s Greatest Lessons Are Learned Through Pain.",
  
    "It’s foolish to fear what we have yet to see and know.",
  
    "Laziness is the mother of all bad habits, but ultimately she is a mother and we should respect her.",
  
    "If you don’t like the hand that fate’s dealt you with, fight for a new one.",
  
    "If you’re good at something, never do it for free.",
  
    "Do, or do not. There is no try.",
  
    "It’s what you do right now that makes a difference.",
  
    "Until you start believing in yourself, you ain't gonna have a life!",
  
    "Life does not stop and start at your convenience.",
  
    "You know what the trouble about real life is? There's no danger music."
];

const gasps = [
    'gasps/gasp1.mp3',
    'gasps/gasp2.mp3',
    'gasps/gasp3.mp3',
    'gasps/gasp4.mp3',
    'gasps/gasp5.mp3'
];

const displayEl = document.getElementById("advice-display");
const btn = document.getElementById("advice-btn");
let adviceLimit = 3;

btn.addEventListener("click", () => {
    adviceLimit--;
    if(adviceLimit === 0){
        btn.disabled = true;
    }

    displayRand();
});

function displayRand() {
    displayEl.textContent = "";
    displayEl.classList.add("adviceAnimation");

    const rnd = Math.floor(Math.random() * quote.length);
    console.log(rnd);
    displayEl.textContent = quote[rnd];

    setTimeout(() => {
        displayEl.classList.remove("adviceAnimation");
    }, 1000);
}
let choices = ["rock", "paper", "scissors"];
let resultRecords = [0,0];
let playerChoice = "";
let computerChoice = ""
let wlClass = ["", ""]

const winner = () => {
    computerChoice = choices[Math.trunc(Math.random()*3)];
    announceResult();
    return playerChoice === "rock" && computerChoice === "paper"? "c" 
            : playerChoice === "paper" && computerChoice === "scissors"? "c" 
            : playerChoice === "scissors" && computerChoice === "rock"? "c" 
            : playerChoice === computerChoice? "t" : "p";
}

const runAndDeclareResults = () => {
    let result = winner();
    const pl = document.querySelector(".user");
    const comp = document.querySelector(".computer");
    if(wlClass[0]){
    pl.classList.remove(wlClass[0]);
    comp.classList.remove(wlClass[1]);
    }
    if(result === "p")
    {
        wlClass[0] = "w";
        wlClass[1] = "l"
        pl.classList.add("w")

        comp.classList.add("l")

        resultRecords[0]+=1;

        const changeNumber = document.querySelector(".player > p");
        changeNumber.innerHTML = `${resultRecords[0]}`;
    }
    else if(result === "c")
    {
        wlClass[1] = "w";
        wlClass[0] = "l"
        pl.classList.add("l");

        comp.classList.add("w");

        resultRecords[1]+=1;
        const changeNumber = document.querySelector(".comp > p");
        changeNumber.innerHTML = `${resultRecords[1]}`;
    }
}

const rounds = ()=>{
    const t2 = document.querySelector(".comp > h3");
    const t1 = document.querySelector(".player > h3");


    if(resultRecords[0]>=5)
    {
        t1.innerHTML = "Player won!";
        t1.classList.add("winner");
        t2.classList.add("loser");
        t2.innerHTML = "Computer lost!";


        return 1;
    }
    else if(resultRecords[1]>=5)
    {
        t2.innerHTML = "Computer won!";
        t1.innerHTML = "Player lost!";
        t2.classList.add("winner");
        t1.classList.add("loser");
        return 1;
    }
    return 0;
}

const announceResult = () => {
    console.log("called")
    const sayIt = document.querySelector(".results > .r");
    console.log(sayIt)
    const listElement = document.createElement("li");
    let message = "";
    if(playerChoice===computerChoice) message = "It is a tie."
    else message = `You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    listElement.innerHTML = message;
    sayIt.appendChild(listElement);
}

const checkRoundsandReplay = ()=> {
    let r = rounds();
    if(r) {
        const b = document.querySelector(".button > button");
        b.classList.add("tryagain");
        b.innerHTML = "Play Again"
        b.classList.remove("start");
    }
}
const initGame = () => {
    runAndDeclareResults();
    checkRoundsandReplay();
}

const b = document.querySelector(".button > button");
    
b.addEventListener("click",()=>location.reload());

const playerDiv = document.querySelector(".imgs");

playerDiv.addEventListener('click', (e)=>{
            playerChoice = e.target.classList[1];
            if(resultRecords[1]!==5 && resultRecords[0]!==5) initGame();
        })

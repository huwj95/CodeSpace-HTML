/*import {scoreboard} from "./scoreboard";
let winCounter = scoreboard.wins;
let lossCounter = scoreboard.losses;
let roundsCounter = scoreboard.rounds;*/
let results = {
    computer: 0,
    user: 0,
    rounds: 0
};

function updateScore(result) {
    if (result == 'You win'){
        results.user = results.user + 1;
    } else if (result == 'You lose'){
        results.computer += 1;
    }
    results.rounds += 1;
}

function choice(userInput) {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let userChoice = userInput;
    let executor = document.getElementById('executor');


    //Pick computer choice
    let computerChoice = Math.floor(Math.random() * 3);

    //Report user choice
    executor.innerHTML = `You chose ${ rockPaperScissors[userChoice] }`;

    //Win logic
    let result = '';
  //  let winCounter = 0;
  //  let lossCounter = 0;
  //  let roundsCounter = 0;
    if(userChoice == computerChoice) {
        result = 'Draw';
    } else if (
        (userChoice == 0 && computerChoice == 1) ||
        (userChoice == 1 && computerChoice == 2) ||
        (userChoice == 2 && computerChoice == 0)
    ){
        result = 'You lose';
        //lossCounter += 1;
    } else if (
        (userChoice == 2 && computerChoice == 1) ||
        (userChoice == 1 && computerChoice == 0) ||
        (userChoice == 0 && computerChoice == 2)
    ){
        result = 'You win';
        //winCounter += 1;
    }
    //roundsCounter += 1;
    //Report results with a pleasing interval
    setTimeout(() => {
        executor.innerHTML += `<br>Computer chose ${ rockPaperScissors[computerChoice] }`;
        },
        1000)
    setTimeout(()=>{executor.innerHTML +=`<br> ${result}`}, 1500);
    updateScore(result);
    
    return;
}


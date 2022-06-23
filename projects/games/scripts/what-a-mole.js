import TimerWAM from "./timer-wam.js";

let gameContainer = document.querySelector('.game-container');
const levelButtons = document.querySelectorAll(".level-btn");
let levelChosen;
let timer;
let indexMolesForJumps = [];

levelButtons.forEach(level_btn => level_btn.addEventListener('click', (e)  => {
    levelChosen = e.target.innerHTML;
    lauchGame(levelChosen);
}));

function lauchGame(levelChosen){
    if(levelChosen === "Easy"){
        createTable(8, 2, 50);
    }
    else if(levelChosen === "Medium")
    {
        createTable(8, 3, 40);
    }
    else if(levelChosen === "Hard")
    {
        createTable(4, 2, 20);
    }
}

// The createTable function is basically the main function of the game and controls the code flow.
function createTable(molesForWin, molesJumping, timeSeconds){
    cleanGameContainer();
    createGameTable();
    createScoreTable(molesForWin);
    timer = new TimerWAM(document.querySelector('.timer'), timeSeconds, indexMolesForJumps, molesJumping);
}

// The cleanGameContainer function serves to delete the initial buttons options for chose the level of difficulty.
// It also makes the game container flexible to the number of holes on the board.
function cleanGameContainer(){
    let lastChild = gameContainer.lastElementChild;
    while(lastChild){
        gameContainer.removeChild(lastChild);
        lastChild = gameContainer.lastElementChild;
    }
    gameContainer.style.height = "auto";
}

/*The createGameTable function is used to create the hole board and add the event function
   to each image to make it possible to obtain points.*/ 
function createGameTable(){
    let boxMole;
    let gameTable = document.createElement('div');
    gameTable.className = "game-table";
    for(let i = 0; i < 24; i++){
        boxMole = document.createElement('img');
        boxMole.className = "box-img";
        boxMole.setAttribute('src', '../images/w-a-m/hueco.png');
        boxMole.addEventListener('click', moleIsOut);
        gameTable.appendChild(boxMole);
    }
    gameContainer.appendChild(gameTable);
}

/*The function createScoreTable create the container-score appending the timer and the quantity of points to win. */
function createScoreTable(molesForWin){
    let divScore = document.createElement('div');
    divScore.className = "score-table";
    
    let timerDiv = document.createElement('div');
    timerDiv.className = "timer";
    divScore.appendChild(timerDiv);

    let title = document.createElement("h1");
    let textNode = document.createTextNode("Score:");
    title.appendChild(textNode);
    divScore.appendChild(title);

    for(let i = 0; i < molesForWin; i++){
        createMolePoints(divScore);
    }
    gameContainer.appendChild(divScore);
}

/*The function createMolePoints append a point to the score-container.*/
function createMolePoints(divScore){
    let moleImage = document.createElement('img');
    moleImage.className = "mole-img";
    moleImage.setAttribute('src', '../images/w-a-m/topo.png');
    divScore.appendChild(moleImage);
}

/*The function moleIsOut serves to verify if a image in the board has or not a mole.*/
function moleIsOut(){
    if(this.getAttribute('src') === "../images/w-a-m/topo-hueco.png"){
        appendPoint();
    }
}

/*The appendPoint function is used to add a point when the user manages to catch a mole.
It also serves to verify if the user has win the match.*/
function appendPoint(){
    const molesPoints = document.querySelectorAll('.mole-img');
    for(let i = 0; i < molesPoints.length; i++){
        if(molesPoints[i].getAttribute('src') === '../images/w-a-m/topo.png'){
            molesPoints[i].setAttribute('src', '../images/w-a-m/topo-point.png');
            if(i === molesPoints.length - 1){
                gameContainer.innerHTML = `<div class="final-message">You win the What-a-mole game</div>`;
            }
            break ;
        }
    }
}
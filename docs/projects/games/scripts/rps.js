const originalHTML = document.body.innerHTML;
const buttonChoices = document.getElementsByName('button-name');
let scoresCircles = document.getElementsByClassName('score');
let userChoiceImg = document.getElementById('img-choice-user');
let machineChoiceImg = document.getElementById('img-choice-machine');
let resultMessage = document.getElementById('message-result');
let restartButton = document.getElementById('button-restart');
let userChoice;
let machineChoice;


buttonChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id;    
    if(userChoice !== "")
    {
        userChoiceImg.src = `./../icons/${userChoice}.png`;
        machineChoice = getMachineChoice();
        getResult(userChoice, machineChoice);
    }
}))
  
function getMachineChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)
    {
        machineChoiceImg.src = `./../icons/rock-m.png`;
    }
    else if(randomNumber === 1)
    {
        machineChoiceImg.src = `./../icons/paper-m.png`;
    }
    else if(randomNumber === 2){
        machineChoiceImg.src = `./../icons/scissors-m.png`;
    }
    return randomNumber;
}

function getResult(userChoice, machineChoice)
{
    // Here, I handle the case of draw.
    if(userChoice === "rock" && machineChoice === 0)
    {
        resultMessage.innerHTML = "It's a draw";
    }
    else if(userChoice === "paper" && machineChoice === 1)
    {
        resultMessage.innerHTML = "It's a draw";
    }
    else if(userChoice === "scissors" && machineChoice === 2)
    {
        resultMessage.innerHTML = "It's a draw";
    }
    handleResult(userChoice, machineChoice);

}

function handleResult(userChoice, machineChoice)
{
    if(userChoice === "rock" && machineChoice === 1)
    {
        handleLose();
    }
    else if(userChoice === "rock" && machineChoice === 2)
    {
        handleWin();
    }
    else if(userChoice === "paper" && machineChoice === 0)
    {
        handleWin();
    }
    else if(userChoice === "paper" && machineChoice === 2)
    {
        handleLose();
    }
    else if(userChoice === "scissors" && machineChoice === 0)
    {
        handleLose();
    }
    else if(userChoice === "scissors" && machineChoice === 1)
    {
        handleWin();
    }
}

function handleWin()
{
    resultMessage.innerHTML = "You win!";
    let i = 0
    let flag = 0;
    while(i < scoresCircles.length)
    {
        if(scoresCircles[i].classList.contains('beat-lost'))
        {
            scoresCircles[i].classList.remove('beat-lost');
            flag = 1;
            break;
        }
        i++;
    }
    if(flag !== 1)
    {
        i = 0;
        while(i < scoresCircles.length)
        {
            console.log(scoresCircles[i].classList.contains('beat-win'));
            if(!scoresCircles[i].classList.contains('beat-win'))
            {
                scoresCircles[i].classList.add('beat-win');
                if(i == 2){
                    resultMessage.innerHTML = "You win the game!";
                    restartButton.style.visibility = "visible";
                    restartButton.addEventListener('click', (e) => {
                        window.location.reload();
                    });
                }
                break;
            }
            i++;
        }
    }
}

function handleLose()
{
    resultMessage.innerHTML = "You lost!";
    let i = scoresCircles.length -1;
    let flag = 0;
    while(i >= 0)
    {
        if(scoresCircles[i].classList.contains('beat-win'))
        {
            scoresCircles[i].classList.remove('beat-win');
            flag = 1;
            break;
        }
        i--;
    }
    if(flag !== 1)
    {       
        i = scoresCircles.length - 1;
        while(i >= 0)
        {
            if(!scoresCircles[i].classList.contains('beat-lost'))
            {
                scoresCircles[i].classList.add('beat-lost');
                if(i == 0){
                    resultMessage.innerHTML = "You lost the game!";
                    restartButton.style.visibility = "visible";
                    restartButton.addEventListener('click', (e) => {
                        window.location.reload();
                    });
                }
                break;
            }
            i--;
        }
    }
    
}
import TimerMG from "./timer-mg.js";

const photosMarioBrosChacteres = [
    {
        "name_character" : "Mario Bros",
        "source" : "../images/mg/mario-bros.jpg"
    },
    {
        "name_character" : "Luigi Bros",
        "source" : "../images/mg/luigi.jpg"
    },
    {
        "name_character" : "Peach",
        "source" : "../images/mg/peach.jpg"
    },
    {
        "name_character" : "Donkey Kong",
        "source" : "../images/mg/donkey-kong.jpg"
    },
    {
        "name_character" : "Yoshi",
        "source" : "../images/mg/yoshi.jpg"
    },
    {
        "name_character" : "Wario",
        "source" : "../images/mg/wario.jpg"
    },
    {
        "name_character" : "Toad",
        "source" : "../images/mg/toad.jpg"
    },
    {
        "name_character" : "Planta",
        "source" : "../images/mg/planta.jpg"
    },
    {
        "name_character" : "Lukito",
        "source" : "../images/mg/lukito.jpg"
    },
    {
        "name_character" : "Koopa",
        "source" : "../images/mg/koopa.jpg"
    },
    {
        "name_character" : "Goomba",
        "source" : "../images/mg/goomba.jpg"
    },
    {
        "name_character" : "Bullet Bill",
        "source" : "../images/mg/bullet-bill.jpg"
    },
    {
        "name_character" : "Bowser",
        "source" : "../images/mg/bowser.jpg"
    },
    {
        "name_character" : "Bob Omb",
        "source" : "../images/mg/bob-omb.jpg"
    },
    {
        "name_character" : "Blooper",
        "source" : "../images/mg/blooper.jpg"
    }
];
const levelButtons = document.getElementsByName('level');
let gameContainer = document.querySelector('.game-container');
const arrayPhotosSelected = [];
let timer;
let gameTable;
let timerDiv;
let levelSelected;
let imgCardsSelected = [];
let imageSelectedId = [];
let cardsMatched = [];


levelButtons.forEach(but => but.addEventListener('click', (e) => {
    levelSelected = but.innerHTML;
    lauchGame(levelSelected);
}))

function lauchGame(levelSelected){
    getReadyTable();
    if(levelSelected === 'Easy')
    {
        createTable(9, 60);
    }
    else if(levelSelected === 'Medium')
    {
        createTable(12, 90);
    }
    else if(levelSelected === 'Hard')
    {
        createTable(15, 120);
    }
}

function getReadyTable(){
    gameContainer.style.height = "auto";
    gameContainer.innerHTML = "";
    gameTable = document.createElement('div');
    gameTable.className = "game-table";
    timerDiv = document.createElement('div');
    timerDiv.className = "timer";
    gameContainer.appendChild(timerDiv);
    gameContainer.appendChild(gameTable);
}

function createTable(level_images, time_seconds){
    selectRandomImages(level_images);
    timer = new TimerMG(document.querySelector('.timer'), time_seconds);
    console.log(timer);
    for(let i = 0; i < (level_images * 2); i++){
        createImgCard(i);
    }
}

function selectRandomImages(level_images){
    let randomPhotos = [];
    photosMarioBrosChacteres.sort(() => 0.5 - Math.random())
    randomPhotos = photosMarioBrosChacteres.slice(0, level_images);
    arrayPhotosSelected.push(...randomPhotos);
    arrayPhotosSelected.push(...randomPhotos);
    arrayPhotosSelected.sort(() => 0.5 - Math.random());
}
function createImgCard(index_image){
    let imgCard = document.createElement('img');
    imgCard.setAttribute('src', '../images/mg/logo.jpg');
    imgCard.setAttribute('data-id', `${index_image}`);
    imgCard.addEventListener('click', flipCard);
    gameTable.appendChild(imgCard);
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    if(this.getAttribute('src') !== "../images/mg/match.png")
    {
        imgCardsSelected.push(arrayPhotosSelected[cardId].name_character);
        imageSelectedId.push(cardId);
        this.setAttribute('src', arrayPhotosSelected[cardId].source);
        if(imgCardsSelected.length === 2){
            setTimeout(checkMatch, 650);
        }
    }
}

function checkMatch(){
    let cards = document.querySelectorAll('img');
    if(imgCardsSelected[0] == imgCardsSelected[1]){
        cards[imageSelectedId[0]].setAttribute('src', "../images/mg/match.png");
        cards[imageSelectedId[1]].setAttribute('src', "../images/mg/match.png");
        cardsMatched.push(imgCardsSelected);
        if(cardsMatched.length == cards.length / 2){
            handleWin();
        }
    } else{
        cards[imageSelectedId[0]].setAttribute('src', "../images/mg/logo.jpg");
        cards[imageSelectedId[1]].setAttribute('src', "../images/mg/logo.jpg");
    }
    imgCardsSelected = [];
    imageSelectedId = [];
}

function handleWin(){
    let gameTable = document.querySelector(".game-table");
    gameTable.innerHTML = `<div class="message-final">You win the memory game</div>`;
    timer.stop();
}
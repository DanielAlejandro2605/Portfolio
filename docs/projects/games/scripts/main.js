const gameButtons = document.querySelectorAll('button');
let gameSelected;

gameButtons.forEach(button => addEventListener('click', (e) => {
    gameSelected = e.target.id;
}))


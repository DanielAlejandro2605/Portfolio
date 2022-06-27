export default class TimerWAM {
    /*With the constructor function we are going to create the timer element (HTML) for the game
    and set the value of it depending of the level of difficulty.*/
    constructor(root, timeSeconds, indexMolesForJumps, molesJumping){
        root.innerHTML = TimerWAM.getHTML();
        this.elements = {
            minutes: root.querySelector('.timer_part-minutes'),
            seconds: root.querySelector('.timer_part-seconds')
        }
        this.interval = null;
        this.remainingSeconds = timeSeconds;
        this.updateInterfaceTime();
        this.start(indexMolesForJumps, molesJumping);
    }
    /*The updateInterfaceTime function serves to update the time in the timer, decreasing each time a second 
    according to the variable remainingSeconds*/
    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.elements.minutes.textContent = minutes.toString().padStart(2, "0");
        this.elements.seconds.textContent = seconds.toString().padStart(2, "0");
    }
    /*The makeJumpMoles function is used to generate 3 random numbers that represent indices within the array 
    of moles images and change the image of the hole for that of the mole, generating an effect of the moles 
    jumping*/
    makeJumpMoles(indexMolesForJumps, molesJumping){
        const moles = document.querySelectorAll('.box-img');
        for(let i = 0; i < molesJumping ;i++)
        { 
            indexMolesForJumps.push(Math.floor(Math.random() * moles.length) + 0); 
        }
        indexMolesForJumps.forEach(index => {
            moles[index].setAttribute('src', "../images/w-a-m/topo-hueco.png");
        });
    }
    /*The makeHideMoles function is used to change the image of the mole for the hole, generating an effect
    of the moles hiding */
    makeHideMoles(indexMolesForJumps){
        const moles = document.querySelectorAll('.box-img');
        setTimeout(() => {
            indexMolesForJumps.forEach(index => {
                moles[index].setAttribute('src', "../images/w-a-m/hueco.png");
            })
        }, 550);
    }
    /*The start function is the main method of the timer object, because within I made the diminution of
    the seconds (remainingSeconds), I updated the interface of the timer, I made the moles jump and hide
    during a fraction of time while the timer is running*/
    start(indexMolesForJumps, molesJumping){
        if(this.remainingSeconds === 0) return;
            this.interval = setInterval(() => {
                if(this.remainingSeconds === 0){
                    this.stop();
                    handleLose();
                }
            this.remainingSeconds--;
            this.updateInterfaceTime();
            this.makeJumpMoles(indexMolesForJumps, molesJumping);
            this.makeHideMoles(indexMolesForJumps);
            indexMolesForJumps = [];
        }, 1150);
    }
    /*The stop function serves to stop for clear and stop the timer */
    stop(){
        clearInterval(this.interval);
        this.interval = null;
    }
    static getHTML(){
        return `
            <span class="timer_part timer_part-minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part-seconds">00</span>
        `
    }
}

function handleLose(){
    let gameContainer = document.querySelector(".game-container");
    gameContainer.innerHTML = `<div class="final-message">You lose the What-a-mole game</div>`;
}
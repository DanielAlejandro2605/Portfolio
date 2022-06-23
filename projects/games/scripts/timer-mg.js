export default class TimerMG {
    constructor(root, time_seconds){
        root.innerHTML = TimerMG.getHTML();

        this.elements = {
            minutes: root.querySelector('.timer_part-minutes'),
            seconds: root.querySelector('.timer_part-seconds')
        }
        this.interval = null;
        this.remainingSeconds = time_seconds;
        this.updateInterfaceTime();
        this.start();
    }
    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.elements.minutes.textContent = minutes.toString().padStart(2, "0");
        this.elements.seconds.textContent = seconds.toString().padStart(2, "0");
    }
    start(){
        if(this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if(this.remainingSeconds === 0){
                this.stop();
                handleLose();
            }
        }, 1000);

    }

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
    let gameTable = document.querySelector(".game-table");
    gameTable.innerHTML = `<div class="message-final">You lose the memory game</div>`;
}
// Pomodoro timer
// access elements

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

const wm = document.getElementById('w-minutes');
const ws = document.getElementById('w-seconds');
const bm = document.getElementById('b-minutes');
const bs = document.getElementById('b-seconds');

const counter = document.getElementById('counter');
const msg = document.getElementById('msg');

const btnWMinus = document.getElementById('btn-w-minus');
const btnWPlus = document.getElementById('btn-w-plus');

const btnBMinus = document.getElementById('btn-b-minus');
const btnBPlus = document.getElementById('btn-b-plus');

let startTimer;



// refer to timer variable



const timer = () => {

    // work timer countdown
    if(ws.innerHTML != 0) {
        ws.innerHTML--;
    } else if(wm.innerText != 0 && ws.innerHTML == 0) {
        ws.innerHTML = 59;
        wm.innerHTML --;
    }

    // break timer countdown
    if(wm.innerHTML == 0 && ws.innerHTML == 0) {
        if(bs.innerHTML != 0) {
            bs.innerHTML --;
        } else if(bm.innerText != 0 && bs.innerHTML == 0) {
            bs.innerHTML = 59;
            bm.innerHTML --;

        }
    }

    // cycle counter

    if(wm.innerHTML == 0 && ws.innerHTML == 0 && bm.innerHTML == 0 && bs.innerHTML == 0) {
        wm.innerHTML = 25;
        ws.innerHTML = 0;

        bm.innerHTML = 5;
        bs.innerHTML = 0;

        counter.innerHTML++;
    }
}

const pauseInterval = () => {
    clearInterval(startTimer);
    startTimer = undefined;
}

start.addEventListener('click', () => {
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        msg.innerHTML = 'Timer is already running';
        msg.classList.add('msg');
    }
})

reset.addEventListener('click', () => {
    wm.innerHTML = 25;
    ws.innerHTML = '00';

    bm.innerHTML = 5;
    bs.innerHTML = '00';

    counter.innerHTML = 0;
})


pause.addEventListener('click', pauseInterval)


// Customize work & break duration

btnWMinus.addEventListener('click', function() {
    if(wm.innerHTML > 1) {
        wm.innerHTML--;
    }
    
})

btnWPlus.addEventListener('click', function() {
    wm.innerHTML++;
})

btnBMinus.addEventListener('click', function() {
    if(bm.innerHTML > 1) {
        bm.innerHTML--;
    }
    
})

btnBPlus.addEventListener('click', function() {
    bm.innerHTML++;
})

// end script
  
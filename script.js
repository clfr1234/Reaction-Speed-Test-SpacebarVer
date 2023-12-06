const startBtn = document.getElementById('startBtn');
const waitBtn = document.getElementById('waitBtn');
const clickBtn = document.getElementById('clickBtn');

let started = false;

let totalTime = 0;

let startedTime;
let endedTime;
let randomTime;
let waitTime;
let currentTime;

let cnt = 1;

function start() {

    started = true;


    startBtn.style.display = 'none';
    waitBtn.style.display = 'block';

    randomTime = Math.random() * 3000 + 2000;
    console.log(randomTime);
    waitTime = setTimeout(() => click(), randomTime);
}

function clickIfWait() {
    alert("아직 시작 안했는뒈....");
    waitBtn.style.display = 'block';
    window.clearTimeout(waitTime);
    start();
}

function click() {
    waitBtn.style.display = 'none';
    clickBtn.style.display = 'block';
    startedTime = new Date().getTime();

}

document.addEventListener('keydown', function (e) {
    if (cnt <= 5) {
        if (started) {
            if (e.keyCode === 32) {
                endedTime = new Date().getTime();
                let currentT = Number(endedTime - startedTime);
                let currentLi = document.createElement('li');
                currentLi.textContent = currentT + 'ms';
                console.log("시작시간 : " + startedTime + "\n끝난시간 : " + endedTime + "\n걸린시간 : " + currentT);
                if (cnt <= 5) {
                    document.getElementById('record').appendChild(currentLi);
                    totalTime += currentT;
                }
                cnt++;
                started = false;
                if (cnt <= 5) {
                    clickBtn.style.display = 'none';
                    waitBtn.style.display = 'block';
                    start();
                } else {
                    clickBtn.style.display = 'none';
                    waitBtn.style.display = 'none';
                    startBtn.style.display = 'none';
                    document.getElementById('result').style.display = 'block';
                    document.querySelector('#result').innerHTML = "평균 값 : " + totalTime / 5 + "ms";
                }
                e.preventDefault();
            }
        }
    }
});

/*clickBtn.addEventListener('click', function () {
    if (cnt <= 5) {
        if (started) {
            endedTime = new Date().getTime();
            let currentT = Number(endedTime - startedTime);
            let currentLi = document.createElement('li');
            currentLi.textContent = currentT + 'ms';
            console.log("시작시간 : " + startedTime + "\n끝난시간 : " + endedTime + "\n걸린시간 : " + currentT);
            if (cnt <= 5) {
                document.getElementById('record').appendChild(currentLi);
                totalTime += currentT;
            }
            cnt++;
            started = false;
            if (cnt <= 5) {
                clickBtn.style.display = 'none';
                waitBtn.style.display = 'block';
                start();
            } else {
                clickBtn.style.display = 'none';
                waitBtn.style.display = 'none';
                startBtn.style.display = 'none';
                document.getElementById('result').style.display = 'block';
                document.querySelector('#result').innerHTML = "평균 값 : " + totalTime / 5 + "ms";
            }
        }
    }
});*/

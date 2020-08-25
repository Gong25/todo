const clockContainer = document.querySelector(".js-clock");
const clockDisplay = clockContainer.querySelector("h1");


function clock(){
    const date = new Date();
    
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clockDisplay.innerHTML = `${hour < 10 ? `0${hour}`: hour}:${min < 10 ? `0${min}`: min}`;
}

setInterval(clock, 1000);


function init(){
    clock();
}

init();
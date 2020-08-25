const body = document.querySelector("body");

const numberOfImages = 3;

function handleImg(image){
    body.appendChild(image);
}

function paintImage(ranNum){
    const image = new Image();
    image.src = `./images/${ranNum}.jpg`;
    image.classList.add("background");
    
    image.addEventListener("loadend", handleImg(image));
    


}



function getRanNum(){
    const ranNum = Math.floor(Math.random()* numberOfImages);
    return ranNum;


}

function init(){
    const ranNum = getRanNum();
    paintImage(ranNum);

}


init();
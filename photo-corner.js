
//////////////////////////////////////// PHOTO CORNER JS

function colorBlue() {
    document.body.style.backgroundColor = "blue"
}

function colorRed() {
    document.body.style.backgroundColor = "red"
}

function colorGrey() {
    document.body.style.backgroundColor = "grey"
}



var imageNumber = 1

var timer = setInterval(nextImage, 2500)



function nextImage() {
    imageNumber += 1;
    if (imageNumber > 8) {
        imageNumber = 1;
    }
    document.getElementById("yoga-pics").src = "./media/" + imageNumber + ".JPG";
}
document.getElementById("next-image-button").onclick = nextImage;


function previousImage() {
    imageNumber -= 1;
    if (imageNumber < 1) {
        imageNumber = 8;
    }
    document.getElementById("yoga-pics").src = "./media/" + imageNumber + ".JPG";
}
document.getElementById("previous-image-button").onclick = previousImage;


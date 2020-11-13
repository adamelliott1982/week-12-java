

alert("Alert, Don't trust the Sheriff -unknown");

// var age = 0;
// age = age+1;
// console.log(age);
// age += 1;
// console.log(age);
// age++;
// console.log(age);
// age--;
// console.log(age);
// age += 2;
// console.log(age);

console.log("Health");
var health = 50;

var drinkWater = true;
if (drinkWater) {
    health += 10;
}
else{
    health -= 10;
}

console.log(health);

// drinkWater = false;



console.log("Level of Trust");
var trust = 0;
trust += 100;
trust = (trust + 85)/2;
console.log(trust);

console.log("Town Health");
var townHealth = 100 ;
console.log(townHealth);
townHealth --;
townHealth --;
townHealth -= 50;
console.log(townHealth);

console.log("Experience");
var exp = 0;
exp += 10;
console.log(exp);

console.log("Level of Destructon");
var destruction = 1;
destruction = destruction * 5;
destruction = destruction * 5;
console.log(destruction);


var goodbye = "Adios Muchacho!";
document.getElementById("leave-button").onclick = leave;
function leave() {
    document.getElementById("page-header").innerHTML = "So Long from Sheriffville!";
    document.getElementById("page-header").style.color = "white";
    document.getElementById("page-header").style.backgroundColor = "maroon";
    document.getElementById("welcome-paragraph").innerHTML = "&quot;Adios Sucker, you made the ultimate mistake!  I was on the verge of taking over Java Land when I became Sheriff, and you were the only one who coulda stopped me...refresh your browser to try again...&quot;";
    document.getElementById("town-square-header").innerHTML = goodbye;
    document.getElementById("town-square-header").style.color = "white";
    document.getElementById("town-square-header").style.backgroundColor = "maroon";
    document.getElementById("town-square-paragraph").innerHTML = "&quot;It's burning...everything and everyone are dead...why did you forsake us...why..." + townHealth + " citizens remain out of 100...you monster...&quot;";
}

function colorBlue() {
    document.body.style.backgroundColor = "blue"
}

function colorRed() {
    document.body.style.backgroundColor = "red"
}

function colorGrey() {
    document.body.style.backgroundColor = "grey"
}
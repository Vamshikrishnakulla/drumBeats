let buttons = document.querySelectorAll(".drum");
let numButtons = buttons.length;

//adding EventListener to every button so when the buttons are clicked the anonymous fuction is executed.
for (let i = 0; i < numButtons; i++) {
    
    buttons[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        
    });
    
}

//adding event listener "keydown" to document object. so, when keyboard keypress is listened by the document
//then the anonymous function with a parameter is triggered and method is executed.
document.addEventListener("keydown", function(add) {
    makeSound(add.key);
});

// function for making sounds on button clicks and keyboard presses.
function makeSound(char) {

    switch (char) {
        case 'w':
            //this.style.color = "white";
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            //this.style.color = "white";
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            //this.style.color = "white";
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default: console.log(char);
    }
}

// music play
// let music = "sounds/tom-" + i + ".mp3";
// var audio = new Audio(music);
// audio.play();
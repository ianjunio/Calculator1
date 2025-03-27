let toggleIndex = 0;
let audio = new Audio();

const lyricsAndMusic = [
    {
        text: "What if...",
        music: "whatif.mp3",
        color: "white"
    },
    {
        text: "Paano kung...",
        music: "paano kung.mp3",
        color: "red"
    }
];

function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
    display.style.color = "white";
    stopMusic();
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById("display"); 
    
    if (value === "*") {
        display.value += "×";
    } else if (value === "/") {
        display.value += "÷";
    } else {
        display.value += value;
    }
}

function calculateResult() {
    let display = document.getElementById("display");
    let current = lyricsAndMusic[toggleIndex];

    display.style.color = current.color;
    typeText(display, current.text, 40);

    playMusic(current.music);
  
    toggleIndex = (toggleIndex + 1) % lyricsAndMusic.length;
}

function typeText(element, text, speed) {
    element.value = ""; 
    let i = 0;
    function type() {
        if (i < text.length) {
            element.value += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function playMusic(src) {
    stopMusic();
    audio.src = src;
    audio.load();
    audio.play().catch(error => console.error("Error playing audio:", error));
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

var audio = new Audio("audio/minecraftbutton.mp3")
var button = document.getElementById("button")

function buttonSound() {
    audio.play();
}

function buttonQuit() {
    setTimeout(function() {
        window.close();
        setTimeout(function() {
            window.location.href="about:blank"
        }, 50);
    }, 250);
}

function buttonSP() {
    setTimeout(function() {
        document.getElementById("titlescreen").style.display = "none";
        document.getElementById("singleplayer").style.display = "block";
    }, 1);
}

function buttonSwCancel() {
    setTimeout(function() {
        document.getElementById("titlescreen").style.display = "block";
        document.getElementById("singleplayer").style.display = "none";
    }, 1);
}
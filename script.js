let audio = new Audio("audio/minecraftbutton.mp3")
let button = document.getElementById("button")

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
    titlescreen.style.display = "none";
    singleplayer.style.display = "block";
}

function buttonMTP() {
    titlescreen.style.display = "none";
    mtp.style.display = "block";
}

function buttonCancel() {
    titlescreen.style.display = "block";
    singleplayer.style.display = "none";
    mtp.style.display = "none";
    multiplayerConnecting.style.display = "none";
    multiplayer.style.display = "none";
    multiplayerConnectingProcess.style.display = "block";
    multiplayerConnectingFailed.style.display = "none";
    buttonMPConnectingCancel.textContent = "Cancel" 
}

function buttonMP() {
    titlescreen.style.display = "none";
    multiplayer.style.display = "block";
    singleplayer.style.display = "none";
}

function buttonMPConnect() {

    multiplayer.style.display = "none";
    multiplayerConnecting.style.display = "block";
    setTimeout(function() {
        multiplayerConnectingProcess.style.display = "none";
        multiplayerConnectingFailed.style.display = "block";
        buttonMPConnectingCancel.textContent = "Back to title screen";
    }, 3000);

}

function buttonMTPDone() {
    mtp.style.display = "none";
    titlescreen.style.display = "block";
}

setInterval(function() {
    let inputValue = ipInput.value.trim();

    if (inputValue.length > 0) {
        document.getElementById("buttonMPConnect").disabled = false;
    } else {
        document.getElementById("buttonMPConnect").disabled = true;
    }
}, 2);

window.addEventListener("DOMContentLoaded", function() {

/* Pages */

const lines = [ /* 15 characters max - 4 characters min */
    "As seen on TV!",
    "Awesome!",
    "100% pure!",
    "May contain nuts!",
    "Better than Prey!",
    "More polygons!",
    "Sexy!",
    "Limited edition!",
    "Flashing letters!",
    "Made by Notch!",
    "Coming soon!",
    "Best in class!",
    "When it's finished!",
    "Absolutely dragon free!",
    "Excitement!",
    "More than 500 sold!",
    "One of a kind!",
    "Indev!",
    "Spiders everywhere!",
    "Check it out!",
    "Holy cow, man!",
    "It's a website!",
    "Made in Denmark!",
    "Reticulating splines!",
    "Minecraft!",
    "Also try Terraria!",
    "Yaaay!",
    "Singleplayer!",
    "Mouse compatible!",
    "Undocumented!",
    "Ingots!",
    "Exploding creepers!",
    "That's not a moon!",
    "l33tc0d3!",
    "Now in JavaScript!",
    "Now CSS 3!",
    "Now HTML 5!",
    "Create!",
    "Survive!",
    "Dungeon!",
    "Exclusive!",
    "The bee's knees!",
    "Down with O.P.P.!",
    "Closed source!",
    "Classy!",
    "Woahh!",
    "Not on Steam!",
    "Oh man!",
    "Check it out!",
    "Awesome community!",
    "Pixels!",
    "Teetsuuuuoooo!",
    "Kaaneeeedaaaa!",
    "Now with difficulty!",
    "Enhanced!",
    "90% bug free!",
    "Pretty!",
    "12 herbs and spices!",
    "Fat free!",
    "Absolutely no memes!",
    "Free dental!",
    "Ask your doctor!",
    "Minors welcome!",
    "Cloud computing!",
    "Legal in Finland!",
    "Hard to label!",
    "Technically good!",
    "Bringing home the bacon!",
    "Indie!",
    "WOTY!",
    "Euclidian!",
    "Now in 2D only!",
    "Inspirational!",
    "Herregud!",
    "Complex cellular automata!",
    "Yes, sir!",
    "Played by cowboys!",
    "Not OpenGL 1.1!",
    "Thousands of colors!",
    "Try it!",
    "No gameplay, only buttons!",
    "Age of Wonders is better!",
    "Try the mushroom stew!",
    "Sensational!",
    "Hot tamale, hot hot tamale!",
    "Play him off, keyboard cat!",
    "Guaranteed!",
    "Macroscopic!",
    "Bring it on!",
    "Random splash!",
    "Call your mother!",
    "Monster infighting!",
    "Loved by millions!",
    "Ultimate edition!",
    "Freaky!",
    "You've got a new key!",
    "Water proof!",
    "Uninflammable!",
    "Whoa, dude!",
    "All inclusive!",
    "Tell your friends!",
    "NP is not in P!",
    "Notch <3 ez!",
    "Music by C418!",
    "Livestreamed!",
    "Haunted!",
    "Polynomial!",
    "Terrestrial!",
    "All is full of love!",
    "Full of stars!",
    "Scientific!",
    "Cooler than Spock!",
    "Collaborate and listen!",
    "Never dig down!",
    "Take frequent breaks!",
    "Not linear!",
    "Han shot first!",
    "Nice to meet you!",
    "Amogus!",
    "Buckets of lava!",
    "Ride the pig!",
    "Larger than Earth!",
    "sqrt(-1) love you!",
    "Phobos anomaly!",
    "Punching wood!",
    "Falling off cliffs!",
    "0% sugar!",
    "150% hyperbole!",
    "Synecdoche!",
    "Let's danec!",
    "Seecret Friday update!",
    "Reference implementation!",
    "i'm lovin' it!",
    "Kiss the sky!",
    "20 GOTO 10!",
    "Verlet intregration!",
    "Peter Griffin!",
    "Do not distribute!",
    "Cogito ergo sum!",
    "56 lines of JavaScript!",
    "A skeleton popped out!",
    "The Work of Notch!",
    "The sum of its parts!",
    "BTAF used to be good!",
    "I miss ADOM!",
    "OICU812!",
    "Bring me Ray Cokes!",
    "Finger-licking!",
    "Thematic!",
    "Pneumatic!",
    "Sublime!",
    "Octagonal!",
    "Une baguette!",
    "Gargamel plays it!",
    "Rita is the new top dog!",
    "SWM forever!",
    "Representing Edsbyn!",
    "Matt Damon!",
    "Consummate V's!",
    "Cow Tools!",
    "Double buffered!",
    "Fan fiction!",
    "Flaxkikare!",
    "Jason! Jason! Jason!",
    "Hotter than the sun!",
    "Internet enabled!",
    "Autonomous!",
    "Engage!",
    "Fantasy!",
    "DRR! DRR! DRR!",
    "Kick it root down!",
    "Regional resources!",
    "Woo, facepunch!",
    "Woo, somethingawful!",
    "Woo, /v/!",
    "Woo, tigsource!",
    "Woo, minecraftforum!",
    "Woo, worldofminecraft!",
    "Woo, IGN!",
    "Woo, reddit!",
    "Woo, myspace!",
    "Woo, 2pp!",
    "Google anlyticsed!",
    "Now supports åäö!",
    "Give us Gordon!",
    "Try Minceraft!",
    "Very fun!",
    "12345 is a bad password!",
    "Vote for net neutrality!",
    "MAP11 has two names!",
    "Omnipotent!",
    "Gasp!",
    "...!",
    "Bees, bees, bees, bees!",
    "Jag kanner en bot!",
    "Haha, LOL!",
    "Hampsterdance!",
    "Switches and ores!",
    "Menger sponge!",
    "idspispopd!",
    "Eple (original edit)!",
    "So fresh, so clean!",
    "Slow acting portals!",
    "Try the Nether!",
    "Don't look directly at the bugs!",
    "Oh, ok, Pigmen!",
    "Finally with ladders!",
    "Scary!",
    "Twittered about!",
    "Jump up, jump up, and get down!",
    "Joel is neat!",
    "A riddle, wrapped in a mystery!",
    "Huge tracts of land!",
    "Welcome to your Doom!",
    "Stay a while, stay forever!",
    "Stay a while and listen!",
    "Treatment for your rash!",
    "Noun is an autonym!",
    "Information wants to be free!",
    "Lots of truthiness!",
    "The creeper is a spy!",
    "Turing complete!",
    "It's groundbreaking!",
    "Let our battle's begin!",
    "The sky is the limit!",
    "Rest in peace, Technoblade!",
  ];
  
const randomIndex = Math.floor(Math.random() * lines.length);
  
const randomLine = lines[randomIndex];
  
const lineResult = randomLine.replace(/\s/g, '&nbsp;');

let splashText = document.getElementById("splash")

splashText.innerHTML = lineResult;

const splashlength = splashText.textContent.length;
console.log(splashlength);

const parentWidth = 700;

/* Show title after 1.5 seconds */

const mojanglogo = document.getElementById("mojanglogo");

setTimeout(function() {
    mojanglogo.style.display = "none";
    titlescreen.style.display = "block";
    document.querySelector("body").style.backgroundSize = "110px"
}, 1); /* Code for disabling the Mojang logo */

setInterval(function() {
    const textWidth = splashText.offsetWidth;
    const marginLeft = (parentWidth - textWidth);

    splashText.style.marginLeft = marginLeft / 1.5 + "px";
}, 1);

});


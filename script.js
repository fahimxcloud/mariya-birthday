const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");

const photos = [
"photos/Screenshot_20260728-192610_1.png",
"photos/Screenshot_20260728-192642_1.png",
"photos/Screenshot_20260728-192723_1.png",
"photos/Screenshot_20260728-192849_1.png",
"photos/Screenshot_20260729-182259.png",
"photos/Screenshot_20260729-183550_2.png",
"photos/Screenshot_20260729-183603_1.png"
];

let current = 0;
const img = document.getElementById("photo");

openBtn.addEventListener("click", () => {

    openBtn.style.transform="scale(1.4) rotate(20deg)";
    openBtn.style.opacity="0";

    setTimeout(()=>{

        welcome.style.display="none";
        main.style.display="block";

    },800);

});

setInterval(() => {
    current = (current + 1) % photos.length;
    img.src = photos[current];
}, 3000);
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

if(wishBtn){

wishBtn.onclick = () =>{

wishMessage.innerHTML =
"💙 May Allah bless you with endless happiness, success, good health, and beautiful moments. Happy Birthday Mariya! 🎉";

wishMessage.style.opacity="1";

};

}
const letter =
`Happy Birthday, Mariya Binty 💙

May Allah bless you with endless happiness,
good health,
success,
peace,
and beautiful memories.

Keep smiling,
keep believing in yourself,
and never stop chasing your dreams.

Thank you for being such a wonderful friend.

I hope today becomes one of the happiest days of your life.

✨ A little surprise from FAHIM 💙`;

const typing = document.getElementById("typing");

if(typing){

let i = 0;

function typeLetter(){

if(i < letter.length){

typing.innerHTML += letter.charAt(i);

i++;

setTimeout(typeLetter,45);

}

}

setTimeout(typeLetter,1000);

}
const intro = document.getElementById("intro");

if(intro){

intro.onclick = ()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

document.getElementById("welcome").style.display="flex";

},900);

};

}
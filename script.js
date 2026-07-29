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

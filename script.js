const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");

const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg",
    "photos/photo6.jpg",
    "photos/photo7.jpg"
];

let current = 0;
const img = document.getElementById("photo");

openBtn.addEventListener("click", () => {
    welcome.style.display = "none";
    main.style.display = "block";
});

setInterval(() => {
    if (!img) return;
    current = (current + 1) % photos.length;
    img.src = photos[current];
}, 3000);

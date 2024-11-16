const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Promjena poruke i GIF-a kada se klikne "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "You got Rickrolled ?? (FOLLOW ME @kristel_tech or 7 years bad luck)";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Pomicanje gumba "No" na sluèajnu poziciju
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Maksimalne pozicije
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Random pozicije
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

let fails = 0;

btn.addEventListener("mouseover", () => {
    fails++;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    btn.style.left = x + "px";
    btn.style.top = y + "px";

    if (fails === 7) {
        const pic = document.getElementById("funnyPic");
        pic.style.display = "block";
        pic.style.animation = "shake 0.2s infinite";
    }
});

let fails = 0;

btn.addEventListener("mouseover", () => {
    fails++;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    btn.style.left = x + "px";
    btn.style.top = y + "px";

    // After 5 tries, show picture
    if (fails >= 5) {
        document.getElementById("funnyPic").style.display = "block";
    }
});

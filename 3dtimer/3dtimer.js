const countToDate = new Date().setHours(new Date().getHours() + 24),
    flipCard = document.querySelector(".flip-card");

let previosTimeBetweenDates;

setInterval(() => {
    const currentDate = new Date(),
        timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    flipAllCards(timeBetweenDates);
    previosTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
    const seconds = time % 60,
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600);

    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top"),
        bottomHalf = flipCard.querySelector(".bottom"),
        topFlip = document.createElement("div"),
        bottomFlip = document.createElement("div"),
        startNumber = parseInt(topHalf.textContent);

    if (newNumber === startNumber) {
        return;
    }

    topFlip.classList.add("top-flip");
    bottomFlip.classList.add("bottom-flip");

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", e => {
        topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
}
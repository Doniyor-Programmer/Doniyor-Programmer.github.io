let numberText = document.querySelector(".numberText"),
    numberBtn = document.querySelector(".numberBtn"),
    numberLink = document.querySelector(".numberLink");

numberBtn.addEventListener("click", () => {
    numberLink.href = `tel:${numberText.value}`;
    numberLink.textContent = `Action with this number ${numberText.value}`;
    numberText.value = ``;
});
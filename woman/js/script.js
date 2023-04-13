let naME = document.querySelector(".naME"),
    checkNameBtn = document.querySelector(".checkNameBtn"),
    male = document.querySelector(".male"),
    female = document.querySelector(".female"),
    endText = document.querySelector(".endText"),
    endLink = document.querySelector(".endLink");

checkNameBtn.addEventListener("click", () => {
    endText.textContent = `Hello ${naME.value}!`;
    // naME.value = ``;
});

male.addEventListener("click", () => {
    female.style.display = "none";
    endText.textContent = `Hello ${naME.value}! Sorry you aren't able to open link`;
});

female.addEventListener("click", () => {
    male.style.display = "none";
    endText.textContent = `Hello ${naME.value}! You can visit `;
    endLink.href = `woman2.html`;
    endLink.target = `_blank`;
    endLink.textContent = `here`;
});
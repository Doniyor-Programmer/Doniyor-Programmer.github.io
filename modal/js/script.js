let input = document.querySelector("input"),
    button = document.querySelector("button"),
    div = document.querySelector("div"),
    body = document.querySelector("body");

input.addEventListener("click", () => {
    div.style.display = "block";
    body.style.cssText = "background-color: #4a4a4a; z - index: -1;";
});

button.addEventListener("click", () => {
    div.style.display = "none";
    body.style.cssText = "background-color: white; z-index: 1;";
});
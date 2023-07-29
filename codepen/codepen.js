const htmlCode = document.querySelector("#html");
const cssCode = document.querySelector("#css");
const jsCode = document.querySelector("#js");
const out = document.querySelector(".codepen-out");
const style = document.querySelector("style");

htmlCode.value = localStorage.getItem("htmlCode");
cssCode.value = localStorage.getItem("cssCode");
jsCode.value = localStorage.getItem("jsCode");
out.innerHTML = htmlCode.value;
style.innerHTML = cssCode.value;
eval(jsCode.value);

htmlCode.addEventListener("change", () => {
    out.innerHTML = htmlCode.value;
    localStorage.setItem("htmlCode", htmlCode.value);
});

cssCode.addEventListener("change", () => {
    style.innerHTML = cssCode.value;
    localStorage.setItem("cssCode", cssCode.value);
});

jsCode.addEventListener("change", () => {
    eval(jsCode.value);
    localStorage.setItem("jsCode", jsCode.value);
});
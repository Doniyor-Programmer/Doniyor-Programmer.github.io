const canvas = document.querySelector("#drawing-board"),
      toolbar = document.querySelector("#toolbar"),
      ctx = canvas.getContext("2d"),
      canvasOffsetX = canvas.offsetLeft,
      canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false,
    lineWidth = 5,
    startX,
    startY;

toolbar.addEventListener("click", e => {
    if (e.target.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener("change", e => {
    if (e.target.id === "stroke") {
        ctx.strokeStyle = e.target.value;
    }

    if (e.target.id === "lineWidth") {
        lineWidth = e.target.value;
    }
});

const draw = e => {
    if (!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
};

canvas.addEventListener("mousedown", e => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener("mouseup", e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);
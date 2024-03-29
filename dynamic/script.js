const volume = document.getElementById("volume"),
    bass = document.getElementById("bass"),
    mid = document.getElementById("mid"),
    treble = document.getElementById("treble"),
    visualizer = document.getElementById("visualizer"),
    context = new AudioContext(),
    analyserNode = new AnalyserNode(context, { fftSize: 256 }),
    gainNode = new GainNode(context, {gain: volume.value}),
    bassEQ = new BiquadFilterNode(context, {
        type: "lowshelf",
        frequency: 500,
        gain: bass.value
    }),
    midEQ = new BiquadFilterNode(context, {
        type: "peaking",
        Q: Math.SQRT1_2,
        frequency: 1500,
        gain: mid.value
    }),
    trebleEQ = new BiquadFilterNode(context, {
        type: "highshelf",
        frequency: 3000,
        gain: treble.value
    });

setupEventListeners();
setupContext();
resize();
drawVisualizer();

function setupEventListeners() {
    window.addEventListener("resize", resize);

    volume.addEventListener("input", e => {
        const value = parseFloat(e.target.value);
        gainNode.gain.setTargetAtTime(value, context.currentTime, .01);
    });

    bass.addEventListener("input", e => {
        const value = parseInt(e.target.value);
        bassEQ.gain.setTargetAtTime(value, context.currentTime, .01);
    });

    mid.addEventListener("input", e => {
        const value = parseInt(e.target.value);
        midEQ.gain.setTargetAtTime(value, context.currentTime, .01);
    });

    treble.addEventListener("input", e => {
        const value = parseInt(e.target.value);
        trebleEQ.gain.setTargetAtTime(value, context.currentTime, .01);
    });
}

async function setupContext() {
    const guitar = await getGuitar();
    if (context.state === "suspended") {
        await context.resume();
    }
    const source = context.createMediaStreamSource(guitar);
    source
        .connect(midEQ)
        .connect(bassEQ)
        .connect(trebleEQ)
        .connect(gainNode)
        .connect(analyserNode)
        .connect(context.destination);
}

function getGuitar() {
    return navigator.mediaDevices.getUserMedia({
        audio: {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false,
            latency: 0
        }
    });
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);

    const bufferLength = analyserNode.frequencyBinCount,
        dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    const width = visualizer.width,
        height = visualizer.height,
        barWidth = width / bufferLength,
        canvasContext = visualizer.getContext("2d");
    canvasContext.clearRect(0, 0, width, height);

    dataArray.forEach((item, index) => {
        const y = item / 255 * height / 2,
            x = barWidth * index;

        canvasContext.fillStyle = `hsl(${y / height * 400}, 100%, 50%)`;
        canvasContext.fillRect(x, height - y, barWidth, y);
    });
}

function resize() {
    visualizer.width = visualizer.clientWidth * devicePixelRatio;
    visualizer.height = visualizer.clientHeight * devicePixelRatio;
}
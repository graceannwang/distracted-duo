function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);

    canvas.parent("sketch-holder");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(207);
}

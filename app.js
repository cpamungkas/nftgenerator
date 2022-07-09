function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    let collectNFTImage = createButton("Collect Item Now")
    collectNFTImage.position((width / 2) - 50, height - 100)
    collectNFTImage.mouseClicked(download)

    background(255)
}

function download() {
    const ext = "png"
    const filename = `nft${~~[Math.random(random(100000)) * random(100000)]}.${ext}`
    save(filename)
}

function draw() {
    let rotator = millis() / 1000
    // orbitControl()

    rotateY(rotator)
    rotateX(rotator)

    fill(random(255), random(255), random(255), random(255))
    shininess(random(25));
    sphere(random(200))


    fill(random(255), random(255), random(255), random(255))

    circle(random(-windowWidth / 2, windowWidth / 2), random(windowHeight / 2, -windowHeight / 2), random(50))
}
var walker;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    walker = new Walker;
}

function draw(){
    background(51);
    walker.update();
    walker.display();
}

function Walker() {
    this.pos = createVector(width/2, height/2);
    
    this.update = function(){
        var vel = createVector(random(-5,5),random(-5,5));
        this.pos.add(vel);
    }

    this.display = function(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);
    }

}
function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(0, width);

  this.update = function(){
    this.z = this.z - speed;
    
    if (this.z < 1) {
        this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(0, width);
    }

  }
}  

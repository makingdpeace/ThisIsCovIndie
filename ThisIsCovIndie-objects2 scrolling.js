//let imagePaths = ['../Images/Bottom Banner.png', '../Images/Top Banner.png', '../Images/elephant.png', '../Images/Left bird.png', '../Images/Right bird.png']; // Paths to your images

let images = [];

function preload() {
  // Load 5 PNG images with custom scaling and explicit Y positions
  images = [
    {
      img: loadImage('../Images/Bottom Banner.png'),
      speed: 1,     // Slow speed for first image
      xPos: 0,   // Initial x position
      yPos: 510,    // Explicitly set Y position
      scale: 0.33    // 50% of original size
    },
    {
      img: loadImage('../Images/Top Banner.png'),
      speed: 1.5,     // Medium speed for second image
      xPos: 0,
      yPos: 50,    // Different Y position
      scale: 0.35    // 70% of original size
    },
    {
      img: loadImage('../Images/elephant.png'),
      speed: 2,     // Faster speed for third image
      xPos: 0,
      yPos: 140,    // Another Y position
      scale: 0.27    // 60% of original size
    },
    {
      img: loadImage('../Images/Left bird.png'),
      speed: 2.5,   // Another custom speed
      xPos: 0,
      yPos: 250,    // Explicit Y position
      scale: 0.28    // 40% of original size
    },
    {
      img: loadImage('../Images/Right bird.png'),
      speed: 3,   // Slowest speed
      xPos: 0,
      yPos: 250,    // Explicit Y position
      scale: 0.26    // 80% of original size
    },
    {
      img: loadImage('../Images/TheCovClubText.png'),
      speed: 3.5,   // Slowest speed
      xPos: 0,
      yPos: 65,    // Explicit Y position
      scale: 0.26    // 80% of original size
    },
    {
      img: loadImage('../Images/ThisIsCoventryIndieText.png'),
      speed: 4,   // Slowest speed
      xPos: 0,
      yPos: 581,    // Explicit Y position
      scale: 0.23    // 80% of original size
    },
    {
      img: loadImage('../Images/spotify.png'),
      speed: 4.5,   // Slowest speed
      xPos: 0,
      yPos: 400,    // Explicit Y position
      scale: 0.1    // 80% of original size
    },
    {
      img: loadImage('../Images/peacewhite.png'),
      speed: 0,   // Slowest speed
      xPos: 600,
      yPos: 330,    // Explicit Y position
      scale: 0.35    // 80% of original size
    },

    // {
    //   img: loadImage('../Images/Cov black and white.png'),
    //   speed: 0.5,   // Slowest speed
    //   xPos: -100,
    //   yPos: 50,    // Explicit Y position
    //   scale: 0.6    // 80% of original size
    // }
  ];
}

function setup() {
  // Create canvas that fills the entire window
  createCanvas(windowWidth, windowHeight);
}

// Ensure canvas resizes when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Black canvas
  
  // Draw and move images
  for (let imageObj of images) {
    // Move image from left to right using its individual speed
    imageObj.xPos += imageObj.speed;
    
    // Calculate scaled image width
    let scaledWidth = imageObj.img.width * imageObj.scale;
    
    // Reset image position if it moves off-screen
    if (imageObj.xPos > width) {
      imageObj.xPos = -scaledWidth;
    }
    
    // Push and pop to manage drawing transformations
    push();
    
    // Draw the image with scaling
    imageMode(CORNER);
    scale(imageObj.scale);
    image(imageObj.img, imageObj.xPos / imageObj.scale, imageObj.yPos / imageObj.scale);
    
    pop();
  }
}


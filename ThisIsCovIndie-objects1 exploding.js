//let imagePaths = ['../Images/Bottom Banner.png', '../Images/Top Banner.png', '../Images/elephant.png', '../Images/Left bird.png', '../Images/Right bird.png']; // Paths to your images



let peaceSize = 140;
let circles = [];
let acceleration = 0.01; // Fixed acceleration factor
let topRightCircleColor = [130, 179, 220]; // RGB for blue
let bgImage; // Variable to hold the background image
//let imgX = 100; // X position for the image
//let imgY = 0; // Y position for the image
let imgScale = 0.5; // Scale for the image

function preload() {
  bgImage = loadImage('../Images/Cov black and white.png'); // Load the image
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Size fills the browser
  initializeCircles();
}

function draw() {
  // Draw the background image with specified position and scale
  background(0); // Set background to black
  image(bgImage, windowWidth/2 - bgImage.width/4, windowHeight/2 - bgImage.height/4 - 75, bgImage.width * imgScale, bgImage.height * imgScale);
  
  for (let circle of circles) {
    circle.update(); // Update each circle's position
    circle.display(); // Draw each circle
  }
}

function initializeCircles() {
  // Initialize circles with starting positions
  circles.push(new Circle(width / 2, height / 2, peaceSize)); // Center circle
  let offset = peaceSize / 4;
  let theo = (sqrt(3) / 2) * offset; // Theodorus constant

  circles.push(new Circle(width / 2 + offset / 2, height / 2 + theo, peaceSize)); // Right bottom
  circles.push(new Circle(width / 2 - offset / 2, height / 2 - theo, peaceSize)); // Left top
  circles.push(new Circle(width / 2 - offset, height / 2, peaceSize)); // Left center
  circles.push(new Circle(width / 2 - offset / 2, height / 2 + theo, peaceSize)); // Left bottom
  circles.push(new Circle(width / 2 + offset / 2, height / 2 - theo, peaceSize, topRightCircleColor)); // Right top (controlled color)
  circles.push(new Circle(width / 2 + offset, height / 2, peaceSize)); // Right center
}

// Circle class definition
class Circle {
  constructor(x, y, size, color = [255, 255, 255]) { // Default color is white
    this.startX = x;
    this.startY = y;
    this.size = size;
    this.color = color; // Set the color property
    this.targetX = random(-size * 2, width + size * 2) * 10; // Random target off the left or right side
    this.targetY = random(-size * 2, height + size * 2) * 10; // Random target off the top or bottom
    this.currentX = x;
    this.currentY = y;
    this.velocityX = 0;
    this.velocityY = 0;
    this.deceleration = 1.025; // Deceleration factor
    this.isMoving = true; // Flag to check if the circle is moving
  }

  update() {
    if (this.isMoving) {
      // Calculate the distance to the target
      let dirX = this.targetX - this.currentX;
      let dirY = this.targetY - this.currentY;
      let distance = dist(this.currentX, this.currentY, this.targetX, this.targetY);

      // Normalize direction
      if (distance > 0) {
        dirX /= distance;
        dirY /= distance;

        // Update velocity with fixed acceleration
        this.velocityX += dirX * acceleration;
        this.velocityY += dirY * acceleration;

        // Apply deceleration
        this.velocityX *= this.deceleration;
        this.velocityY *= this.deceleration;

        // Update position
        this.currentX += this.velocityX;
        this.currentY += this.velocityY;

        // Stop moving if close to the target
        if (distance < 5) {
          this.isMoving = false;
        }
      }
    }
  }

  display() {
    noFill();
    stroke(this.color[0], this.color[1], this.color[2]); // Use RGB values for the circle's color
    strokeWeight(3);
    circle(this.currentX, this.currentY, this.size / 2); // Draw the circle
  }
}





// let peaceSize = 200;
// let circles = [];
// let acceleration = 0.01; // Fixed acceleration factor
// let topRightCircleColor = [130, 179, 220]; // RGB for blue

// function setup() {
//   createCanvas(windowWidth, windowHeight); // Size fills the browser
//   initializeCircles();
// }

// function draw() {
//   background(0); // Set background to black
//   for (let circle of circles) {
//     circle.update(); // Update each circle's position
//     circle.display(); // Draw each circle
//   }
// }

// function initializeCircles() {
//   // Initialize circles with starting positions
//   circles.push(new Circle(width / 2, height / 2, peaceSize)); // Center circle
//   let offset = peaceSize / 4;
//   let theo = (sqrt(3) / 2) * offset; // Theodorus constant

//   circles.push(new Circle(width / 2 + offset / 2, height / 2 + theo, peaceSize)); // Right bottom
//   circles.push(new Circle(width / 2 - offset / 2, height / 2 - theo, peaceSize)); // Left top
//   circles.push(new Circle(width / 2 - offset, height / 2, peaceSize)); // Left center
//   circles.push(new Circle(width / 2 - offset / 2, height / 2 + theo, peaceSize)); // Left bottom
//   circles.push(new Circle(width / 2 + offset / 2, height / 2 - theo, peaceSize, topRightCircleColor)); // Right top (controlled color)
//   circles.push(new Circle(width / 2 + offset, height / 2, peaceSize)); // Right center
// }

// // Circle class definition
// class Circle {
//   constructor(x, y, size, color = [255, 255, 255]) { // Default color is white
//     this.startX = x;
//     this.startY = y;
//     this.size = size;
//     this.color = color; // Set the color property
//     this.targetX = random(-size * 2, width + size * 2)*10; // Random target off the left or right side
//     this.targetY = random(-size * 2, height + size * 2)*10; // Random target off the top or bottom
//     this.currentX = x;
//     this.currentY = y;
//     this.velocityX = 0;
//     this.velocityY = 0;
//     this.deceleration = 1.025; // Deceleration factor
//     this.isMoving = true; // Flag to check if the circle is moving
//   }

//   update() {
//     if (this.isMoving) {
//       // Calculate the distance to the target
//       let dirX = this.targetX - this.currentX;
//       let dirY = this.targetY - this.currentY;
//       let distance = dist(this.currentX, this.currentY, this.targetX, this.targetY);

//       // Normalize direction
//       if (distance > 0) {
//         dirX /= distance;
//         dirY /= distance;

//         // Update velocity with fixed acceleration
//         this.velocityX += dirX * acceleration;
//         this.velocityY += dirY * acceleration;

//         // Apply deceleration
//         this.velocityX *= this.deceleration;
//         this.velocityY *= this.deceleration;

//         // Update position
//         this.currentX += this.velocityX;
//         this.currentY += this.velocityY;

//         // Stop moving if close to the target
//         if (distance < 5) {
//           this.isMoving = false;
//         }
//       }
//     }
//   }

//   display() {
//     noFill();
//     stroke(this.color[0], this.color[1], this.color[2]); // Use RGB values for the circle's color
//     strokeWeight(4);
//     circle(this.currentX, this.currentY, this.size / 2); // Draw the circle
//   }
// }




// let peaceSize = 200;
// let circles = [];
// let acceleration = 0.01; // Fixed acceleration factor
// let topRightCircleColor = [130, 179, 220]; // RGB for blue (0, 0, 255)

// function setup() {
//   createCanvas(windowWidth, windowHeight); // Size fills the browser
//   // Initialize circles with starting positions
//   circles.push(new Circle(windowWidth / 2, windowHeight / 2, peaceSize)); // Center circle
//   let offset = peaceSize / 4;
//   let theo = (sqrt(3) / 2) * offset; // Theodorus constant

//   circles.push(new Circle(windowWidth / 2 + offset / 2, windowHeight / 2 + theo, peaceSize)); // Right bottom
//   circles.push(new Circle(windowWidth / 2 - offset / 2, windowHeight / 2 - theo, peaceSize)); // Left top
//   circles.push(new Circle(windowWidth / 2 - offset, windowHeight / 2, peaceSize)); // Left center
//   circles.push(new Circle(windowWidth / 2 - offset / 2, windowHeight / 2 + theo, peaceSize)); // Left bottom
//   circles.push(new Circle(windowWidth / 2 + offset / 2, windowHeight / 2 - theo, peaceSize, topRightCircleColor)); // Right top (controlled color)
//   circles.push(new Circle(windowWidth / 2 + offset, windowHeight / 2, peaceSize)); // Right center
// }

// function draw() {
//   background(0, 0, 0); // Set background to black
//   for (let circle of circles) {
//     circle.update(); // Update each circle's position
//     circle.display(); // Draw each circle
//   }
// }

// // Circle class definition
// class Circle {
//   constructor(x, y, size, color = [255, 255, 255]) { // Default color is white
//     this.startX = x;
//     this.startY = y;
//     this.size = size;
//     this.color = color; // Set the color property
//     // Set target positions to random points off the canvas
//     this.targetX = random(-size * 2, width + size * 2) * 10; // Random target off the left or right side
//     this.targetY = random(-size * 2, height + size * 2) * 10; // Random target off the top or bottom
//     this.currentX = x;
//     this.currentY = y;
//     this.velocityX = 0;
//     this.velocityY = 0;
//     this.deceleration = 1.025; // Deceleration factor
//     this.isMoving = true; // Flag to check if the circle is moving
//   }

//   update() {
//     if (this.isMoving) {
//       // Calculate the distance to the target
//       let dirX = this.targetX - this.currentX;
//       let dirY = this.targetY - this.currentY;
//       let distance = dist(this.currentX, this.currentY, this.targetX, this.targetY);

//       // Normalize direction
//       if (distance > 0) {
//         dirX /= distance;
//         dirY /= distance;

//         // Update velocity with fixed acceleration
//         this.velocityX += dirX * acceleration; // Use the fixed acceleration variable
//         this.velocityY += dirY * acceleration; // Use the fixed acceleration variable

//         // Apply deceleration
//         this.velocityX *= this.deceleration;
//         this.velocityY *= this.deceleration;

//         // Update position
//         this.currentX += this.velocityX;
//         this.currentY += this.velocityY;

//         // Stop moving if close to the target
//         if (distance < 5) {
//           this.isMoving = false;
//         }
//       }
//     }
//   }

//   display() {
//     noFill();
//     stroke(this.color[0], this.color[1], this.color[2]); // Use RGB values for the circle's color
//     strokeWeight(4);
//     circle(this.currentX, this.currentY, this.size/2); // Draw the circle
//   }
// }

























// let circleX = []; // Array to hold current x positions of the circles
// let circleY = []; // Array to hold current y positions of the circles
// let targetX = []; // Array to hold target x positions (end positions)
// let targetY = []; // Array to hold target y positions (end positions)
// let speed = 0.5; // Speed of the circles
// let peaceSize = 100; // Size of the peace circles
// let offset = peaceSize/4; // Offset for the Theodorus constant
// let theo; // Theodorus constant
// let animationActive = true; // Flag to control the animation loop

// function setup() {
//   createCanvas(windowWidth, windowHeight); // Create a canvas that fills the window

//   // Calculate the offset and Theodorus constant
//   offset = peaceSize / 4;
//   theo = (sqrt(3) / 2) * offset; // Theodorus constant

//   // Define specific target positions using the Theodorus constant
//   let peaceCenters = [
//     { x: width * 0.5, y: height * 0.5 }, // Center position
//     { x: width * 0.5 + offset / 2, y: height * 0.5 + theo }, // Right bottom
//     { x: width * 0.5 - offset / 2, y: height * 0.5 - theo }, // Left top
//     { x: width * 0.5 - offset, y: height * 0.5 }, // Left center
//     { x: width * 0.5 - offset / 2, y: height * 0.5 + theo }, // Left bottom
//     { x: width * 0.5 + offset / 2, y: height * 0.5 - theo }, // Right top
//     { x: width * 0.5 + offset, y: height * 0.5 } // Right center
//   ];

//   // Initialize the circles' positions to random points off the screen
//   for (let i = 0; i < 7; i++) { // Create 7 circles
//     // Generate unique random starting positions for each circle
//     if (random() < 0.5) {
//       // Start from the left or right side
//       circleX[i] = random([-100, width + 100]); // Random x position off the screen
//       circleY[i] = random(height); // Random y position within the height of the canvas
//     } else {
//       // Start from the top or bottom side
//       circleX[i] = random(width); // Random x position within the width of the canvas
//       circleY[i] = random([-100, height + 100]); // Random y position off the screen
//     }

//     // Set target positions using the Theodorus constant
//     let center = peaceCenters[i];
//     targetX[i] = center.x; // Set target x position
//     targetY[i] = center.y; // Set target y position
//   }
// }

// function draw() {
//     background(0); // Set background to black

//     // Move each circle towards the target position
//     if (animationActive) { // Keep this block to control movement
//         for (let i = 0; i < circleX.length; i++) {
//             if (circleX[i] < targetX[i]) {
//                 circleX[i] += speed; // Move right
//             } else if (circleX[i] > targetX[i]) {
//                 circleX[i] -= speed; // Move left
//             }

//             if (circleY[i] < targetY[i]) {
//                 circleY[i] += speed; // Move down
//             } else if (circleY[i] > targetY[i]) {
//                 circleY[i] -= speed; // Move up
//             }

//             // Check if the circle has reached its target position
//             if (abs(circleX[i] - targetX[i]) < speed && abs(circleY[i] - targetY[i]) < speed) {
//                 circleX[i] = targetX[i]; // Snap to target position
//                 circleY[i] = targetY[i];
//             }
//         }

//         // Check if all circles have reached their target positions
//         animationActive = circleX.some((x, i) => abs(x - targetX[i]) > speed || abs(circleY[i] - targetY[i]) > speed);
//     }

//     // Draw each circle regardless of animation state
//     for (let i = 0; i < circleX.length; i++) {
//         // Set the stroke color based on the circle's position
//         if (i === 5) { // Index 5 corresponds to the "right top" circle
//             stroke(130, 179, 220); // Blue stroke for the "right top" circle
//         } else {
//             stroke(255); // Default white stroke for other circles
//         }
//         strokeWeight(2);
//         noFill();

//         // Draw the circle at its current position
//         ellipse(circleX[i], circleY[i], peaceSize/2, peaceSize/2); // Draw the circle (100px diameter)
//     }
// }

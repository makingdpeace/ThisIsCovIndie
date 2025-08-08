let circleX = []; // Array to hold current x positions of the circles
let circleY = []; // Array to hold current y positions of the circles
let targetX = []; // Array to hold target x positions (end positions)
let targetY = []; // Array to hold target y positions (end positions)
let speed = 0.5; // Speed of the circles
let peaceSize = 100; // Size of the peace circles
let offset = peaceSize/4; // Offset for the Theodorus constant
let theo; // Theodorus constant
let animationActive = true; // Flag to control the animation loop

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas that fills the window

  // Calculate the offset and Theodorus constant
  offset = peaceSize / 4;
  theo = (sqrt(3) / 2) * offset; // Theodorus constant

  // Define specific target positions using the Theodorus constant
  let peaceCenters = [
    { x: width * 0.5, y: height * 0.5 }, // Center position
    { x: width * 0.5 + offset / 2, y: height * 0.5 + theo }, // Right bottom
    { x: width * 0.5 - offset / 2, y: height * 0.5 - theo }, // Left top
    { x: width * 0.5 - offset, y: height * 0.5 }, // Left center
    { x: width * 0.5 - offset / 2, y: height * 0.5 + theo }, // Left bottom
    { x: width * 0.5 + offset / 2, y: height * 0.5 - theo }, // Right top
    { x: width * 0.5 + offset, y: height * 0.5 } // Right center
  ];

  // Initialize the circles' positions to random points off the screen
  for (let i = 0; i < 7; i++) { // Create 7 circles
    // Generate unique random starting positions for each circle
    if (random() < 0.5) {
      // Start from the left or right side
      circleX[i] = random([-100, width + 100]); // Random x position off the screen
      circleY[i] = random(height); // Random y position within the height of the canvas
    } else {
      // Start from the top or bottom side
      circleX[i] = random(width); // Random x position within the width of the canvas
      circleY[i] = random([-100, height + 100]); // Random y position off the screen
    }

    // Set target positions using the Theodorus constant
    let center = peaceCenters[i];
    targetX[i] = center.x; // Set target x position
    targetY[i] = center.y; // Set target y position
  }
}

function draw() {
    background(0); // Set background to black

    // Move each circle towards the target position
    if (animationActive) { // Keep this block to control movement
        for (let i = 0; i < circleX.length; i++) {
            if (circleX[i] < targetX[i]) {
                circleX[i] += speed; // Move right
            } else if (circleX[i] > targetX[i]) {
                circleX[i] -= speed; // Move left
            }

            if (circleY[i] < targetY[i]) {
                circleY[i] += speed; // Move down
            } else if (circleY[i] > targetY[i]) {
                circleY[i] -= speed; // Move up
            }

            // Check if the circle has reached its target position
            if (abs(circleX[i] - targetX[i]) < speed && abs(circleY[i] - targetY[i]) < speed) {
                circleX[i] = targetX[i]; // Snap to target position
                circleY[i] = targetY[i];
            }
        }

        // Check if all circles have reached their target positions
        animationActive = circleX.some((x, i) => abs(x - targetX[i]) > speed || abs(circleY[i] - targetY[i]) > speed);
    }

    // Draw each circle regardless of animation state
    for (let i = 0; i < circleX.length; i++) {
        // Set the stroke color based on the circle's position
        if (i === 5) { // Index 5 corresponds to the "right top" circle
            stroke(130, 179, 220); // Blue stroke for the "right top" circle
        } else {
            stroke(255); // Default white stroke for other circles
        }
        strokeWeight(2);
        noFill();

        // Draw the circle at its current position
        ellipse(circleX[i], circleY[i], peaceSize/2, peaceSize/2); // Draw the circle (100px diameter)
    }
}

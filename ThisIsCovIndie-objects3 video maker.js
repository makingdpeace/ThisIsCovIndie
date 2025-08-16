let images = []; // Array to hold the images
let imageNames = [
    '../Images/Bottom Banner.png', // Specify the path for image1
    '../Images/Top Banner.png', // Specify the path for image2
    '../Images/elephant.png',  // Specify the path for image3
    '../Images/Left bird.png', // Specify the path for image4
    '../Images/Right bird.png', // Specify the path for image5
    '../Images/TheCovClubText.png',  // Specify the path for image6
    '../Images/ThisIsCoventryIndieText.png', // Specify the path for image7
    '../Images/spotify.png', // Specify the path for image8
    '../Images/peacewhite.png',  // Specify the path for image9
    '../Images/Cov black and white.png',  // Specify the path for image10
    '../Images/CovBaths.png', // Specify the path for image11
    '../Images/dogandtrumpet.png', // Specify the path for image12
    '../Images/Eclipse.png',  // Specify the path for image13
    '../Images/jimmyhill.png', // Specify the path for image14
    '../Images/Locarno.png', // Specify the path for image15
    '../Images/PinkParrot.png',  // Specify the path for image16
    '../Images/tictoc.png', // Specify the path for image17
  ]; 
let positions = [ // Array of positions for each image
    { x: 540, y: 1340 },   // Position for image1 bottom banner
    { x: 540, y: 610 },   // Position for image2 top banner
    { x: 510, y: 800 },   // Position for image3 elephant
    { x: 310, y: 1020 },   // Position for image4 left bird
    { x: 770, y: 1030 },   // Position for image5 right bird
    { x: 540, y: 530 },   // Position for image6 cov club text
    { x: 540, y: 1380 },   // Position for image7 this is cov indie text
    { x: 540, y: 1120 },   // Position for image8 spotify
    { x: 540, y: 1120 },   // Position for image9 peace whote
    { x: 540, y: 960 },   // Position for image10 cov black and white
    { x: 520, y: 880 },   // Position for image11 cov baths
    { x: 580, y: 685 },   // Position for image12 dog and trumpet
    { x: 250, y: 850 },   // Position for image13 eclipse
    { x: 770, y: 980 },   // Position for image14 jimmy
    { x: 480, y: 690 },   // Position for image15 locarno
    { x: 240, y: 1120 },   // Position for image16 pink parrot
    { x: 540, y: 690 },   // Position for image17 tictoc
  ];
let visibility = [
  true, //image1 bottom banner
  true, //image2 top banner
  true, //image3 elephant
  true, //image4 left bird
  true, //image5 right bird
  true, //image6 cov club text
  true, //image7 this is cov indie text
  true, //image8 spotify
  true, //image9 peace whote
  true, //image10 cov black and white
  true, //image11 cov baths
  true, //image12 dog and trumpet
  true, //jimage13 eclipse
  true, //image14 jimmy
  true, //image15 locarno
  true, //image16 pink parrot
  true //image17 tictoc
  ]; // Array to control visibility of each image
let scales = [
  0.58, //image1 bottom banner
  0.6, //image2 top banner
  0.45, //image3 elephant
  0.46, //image4 left bird
  0.46, //image5 right bird
  0.45, //image6 cov club text
  0.42, //image7 this is cov indie text
  0.35, //image8 spotify
  0.6, //image9 peace whote
  1,  //image10 cov black and white
  0.55, //image11 cov baths
  0.58, //image12 dog and trumpet
  0.3,//jimage13 eclipse
  0.53,//image14 jimmy
  0.38, //image15 locarno
  0.7, //image16 pink parrot
  0.33 //image17 tictoc
  ]; // Array to specify scale for each image

function preload() {
    // Load all images before the setup function
    for (let i = 0; i < imageNames.length; i++) {
        images[i] = loadImage(imageNames[i]); // Load each image
    }
}

function setup() {
    createCanvas(1080, 1920); // Width: 800px, Height: 600px
    background(0); // Light gray background
}

function draw() {
    // Draw all loaded images on the canvas at specified positions
    for (let i = 0; i < images.length; i++) {
        if (visibility[i]) { // Check if the image should be visible
            let imgWidth = images[i].width * scales[i]; // Calculate scaled width
            let imgHeight = images[i].height * scales[i]; // Calculate scaled height
            
            // Center the image at the specified position
            let centerX = positions[i].x - imgWidth / 2; // Adjust x for center
            let centerY = positions[i].y - imgHeight / 2; // Adjust y for center
            
            image(images[i], centerX, centerY, imgWidth, imgHeight); // Draw each image at its specified position and size
        }
    }
}

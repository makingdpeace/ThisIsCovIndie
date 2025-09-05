let images = []; // Array to hold the images

let imageNames = [
    '../Images/Bottom Banner.png', // Specify the path for image0
    '../Images/Top Banner.png', // Specify the path for image1
    '../Images/elephant.png',  // Specify the path for image2
    '../Images/Left bird.png', // Specify the path for image3
    '../Images/Right bird.png', // Specify the path for image4
    '../Images/TheCovClubText.png',  // Specify the path for image5
    '../Images/ThisIsCoventryIndieText.png', // Specify the path for image6
    '../Images/spotify.png', // Specify the path for image7
    '../Images/peacewhite.png',  // Specify the path for image8
    '../Images/Cov black and white.png',  // Specify the path for image9
    '../Images/CovBaths.png', // Specify the path for image10
    '../Images/tictocdogtrumpet.png', // Specify the path for image11
    '../Images/eclipsepinkparrot.png',  // Specify the path for image12
    '../Images/jimmyhill.png', // Specify the path for image13
    '../Images/castleonly.png', // Specify the path for image14
  ];

let positions = [ // Array of positions for each image
    { x: 540, y: 1340 },   // Position for image0 bottom banner
    { x: 540, y: 610 },   // Position for image1 top banner
    { x: 510, y: 870 },   // Position for image2 elephant
    { x: 310, y: 1020 },   // Position for image3 left bird
    { x: 770, y: 1030 },   // Position for image4 right bird
    { x: 540, y: 530 },   // Position for image5 cov club text
    { x: 540, y: 1380 },   // Position for image6 this is cov indie text
    { x: 540, y: 1120 },   // Position for image7 spotify
    { x: 540, y: 1120 },   // Position for image8 peace whote
    { x: 540, y: 960 },   // Position for image9 cov black and white
    { x: 540, y: 880 },   // Position for image10 cov baths
    { x: 540, y: 685 },   // Position for image11 tictocdogtrumpet
    { x: 250, y: 1080 },   // Position for image12 eclipsepinkparrot
    { x: 770, y: 980 },   // Position for image13 jimmy
    { x: 540, y: 700 },   // Position for image14 castleonly
  ];

  let scales = [
  0.58, //image0 bottom banner
  0.6, //image1 top banner
  0.45, //image2 elephant
  0.46, //image3 left bird
  0.46, //image4 right bird
  0.45, //image5 cov club text
  0.42, //image6 this is cov indie text
  0.35, //image7 spotify
  0.6, //image8 peace whote
  1,  //image9 cov black and white
  0.51, //image10 cov baths
  0.17, //image11 tictocdogtrumpet
  0.5,//image12 eclipseparrot
  0.5, //image13 jimmy
  0.45, //image 14 castleonly
  ]; // Array to specify scale for each image

// Which indices are always visible
const constantIndices = [0, 1, 5, 6, 8];

// Fixed swapping pairs defined once (no runtime changes)
// Each entry: [indexA, indexB, intervalMs]
const swappingPairs = [
  [2, 10, 2000],
  [3, 12, 3000],
  [4, 13, 5000],
  [14, 11, 7000],
];

// Internal state derived from swappingPairs
let pairStates = [];

function preload() {
  for (let i = 0; i < imageNames.length; i++) {
    images[i] = loadImage(imageNames[i]);
  }
}

function setup() {
  createCanvas(1080, 1920);
  const now = millis();
  for (let p of swappingPairs) {
    pairStates.push({
      a: p[0],
      b: p[1],
      intervalMs: p[2],
      lastSwitch: now,
      showingA: true
    });
  }
}

function draw() {
  background(0);

  // draw constant images
  for (let idx of constantIndices) {
    drawImageAt(idx);
  }

  // update and draw fixed swapping pairs
  const t = millis();
  for (let ps of pairStates) {
    if (t - ps.lastSwitch >= ps.intervalMs) {
      ps.showingA = !ps.showingA;
      ps.lastSwitch = t;
    }
    drawImageAt(ps.showingA ? ps.a : ps.b);
  }
}

function drawImageAt(idx) {
  const img = images[idx];
  if (!img) return;
  const pos = positions[idx];
  const s = scales[idx];
  if (!pos || s === undefined) return;
  const w = img.width * s;
  const h = img.height * s;
  imageMode(CENTER);
  image(img, pos.x, pos.y, w, h);
  imageMode(CORNER);
} 
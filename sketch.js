let font;

let userInput;
let button;

let userLine;
let poem = [];

// let response;


function preload(){
  font = loadFont('fonts/IMFellDWPica-Regular.ttf')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont(font);
  textSize(30)
  textAlign(CENTER)
  userInput = createInput();
  userInput.position(windowWidth/2 -110, 150);
  button = createButton('Write Poem');
  button.position(userInput.x + 150, userInput.y )
  button.mousePressed(newLine)
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function newLine(){
  userLine = userInput.value();
  userInput.value('');
  let words = RiTa.tokenize(userLine);

  RiTa.randomOrdering(words)
  let last = words.length - 1;
  let rhymes = RiTa.rhymesSync(words[last]);
  if (rhymes.length === 0){
    poem.push(userLine);
  } else{
    let changedWord = random(rhymes);
  words[last] = changedWord;
  userLine = RiTa.untokenize(words);
  poem.push(userLine);
  }
  
}

function writePoem(){
  for(x = 0; x < poem.length; x++){
    text(poem[x], windowWidth/2, windowHeight/3 + x * 35);
  }
}

function draw() {
  background(150, 170, 200);
  text('Write a Poem!', windowWidth/2, 100, )
  text ("If it your input doesn't change the first time just try again!", windowWidth/2, 500 )
  writePoem();
}
// response = '';
  // for(x = 0; x < words.length; x++){
  //   if(RiTa.isVerb(words[x])){
  //     response += RiTa.randomWord({pos: "vb"});
  //   }else{
  //     response += words[x];
  //   }
  //   response += ' ';
  // }

let channelName = "welcomePage";

let nameInput 
let feelingInput


let redVal;
let greenVal;
let blueVal;

let you;

function setup() {

    createCanvas(windowWidth, windowHeight);

    nameInput = createInput();
    nameInput.style('font-size', '30px');
    nameInput.position(windowWidth/3, 325);

    feelingInput = createInput();
    feelingInput.style('font-size', '30px');
    feelingInput.position(windowWidth/3, 435);

    sliderRed = createSlider(0, 255, 255, 1);
    sliderRed.position(windowWidth/3, 570);
    sliderRed.style('width', '80px');
    sliderBlue = createSlider(0, 255, 255, 1);
    sliderBlue.position(windowWidth/3, 630);
    sliderBlue.style('width', '80px');
    sliderGreen = createSlider(0, 255, 255, 1);
    sliderGreen.position(windowWidth/3, 690);
    sliderGreen.style('width', '80px');


    submitButton = createButton("Generate");
    submitButton.position(windowWidth/3, 750);
    submitButton.style('font-size', '30px');
    
  
  }
  
function draw() {
  background(redVal, blueVal, greenVal);

  textSize(60);

  textAlign(CENTER);

  text("Mood Generator", windowWidth/2, 200);

  textSize(30);
  textAlign(LEFT);
  text("What's your name?", windowWidth/3, 300);

  text("How are you feeling today?", windowWidth/3, 420);

  text("Mixing the colour about how you want to feel:", windowWidth/3, 520);
  textSize(20);


  text("Red", windowWidth/3, 560);
  text("Green", windowWidth/3, 620);
  text("Blue", windowWidth/3, 680);

  redVal = sliderRed.value();
  blueVal = sliderBlue.value();
  greenVal = sliderGreen.value();

  // on submit enter the information
  submitButton.mousePressed(sendTheMessage);

}
 
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases

  // check to see if they enter their name
  if (nameInput.value() != "") { 
    // if they did, save their name to the variable "you"
    you = nameInput.value();
    // load a new page when you press submit
    window.location.href = "https://qinzheng-sun.github.io/pageTwo/index.html?you="+you+"&r="+redVal+"&g="+greenVal+"&b="+blueVal; 

  } else {
    // if they have no entered their name, create an alert and ask them to enter their name
    window.alert("Please enter your name!");
  }
 

}

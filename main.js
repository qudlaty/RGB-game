
let colors = [],
    numSquares = 6,
    pickedColor,
    squares = document.querySelectorAll(".square"),
    colorDisplay = document.getElementById("color-display"),
    messageDisplay = document.getElementById("message"),
    h1Background = document.querySelector("header h1"),
    btnNew = document.querySelector(".btn-new"),
    modeBtns = document.querySelectorAll(".btn");

init();
    
function init() {
  setUpModeBtns();
  setUpSquares();
  btnsReset();
}

function setUpSquares() {
  // EASY/HARD modeBtns event lister
  modeBtns.forEach(modeBtn => {
    modeBtn.addEventListener('click', () => {
      modeBtns[0].classList.remove("active-btn");
      modeBtns[1].classList.remove("active-btn");
      modeBtn.classList.add("active-btn");
      //ternary operator - fancy if
      modeBtn.textContent === "EASY" ? numSquares = 3: numSquares = 6;
      btnsReset();  
    });
  });
}

function setUpModeBtns() {
  squares.forEach(square => {
    // add events to sqrs
    square.addEventListener('click', () => {
      //grab color
      let clickedColor = square.style.backgroundColor;
      //compare
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeAllSquares(pickedColor);
        h1Background.style.backgroundColor = pickedColor;
        btnNew.textContent = "TRY AGAIN";
      }
      else if(square.style.backgroundColor !== "rgb(35, 35, 35)"){
        messageDisplay.textContent = " TRY AGAIN-" + square.style.backgroundColor;
        square.style.backgroundColor = "rgb(35, 35, 35)";
      }
    });
  });
}

function btnsReset() {
  colors = generateRandomColors(numSquares);
  //pick new random color winner
  pickedColor = choseColor();
  //change color display in h1 and bgcolor
  colorDisplay.textContent = pickedColor;
  //bg
  h1Background.style.backgroundColor = "rgb(70, 130, 180)";
  //chaneg message
  messageDisplay.textContent =''; 
  //change color of squares 
  
  squares.forEach( (square, index, array) => { 
    let color = colors[index]
    if(color) {
    	square.style.display = "block";
      square.style.backgroundColor = color;
    } else {
    	square.style.display = "none";
    }
  });
  //change btn text
  if(btnNew.textContent === "TRY AGAIN"){
    btnNew.textContent = "NEW";
  }
}   

//NEW btn
btnNew.addEventListener('click', () => {
  btnsReset();
});

//win change tiles 
function changeAllSquares(color) {
  //loop through sqrs
  squares.forEach(square => {
    square.style.backgroundColor = pickedColor;
  });
}

//randomize winner
function choseColor() {
  let radnom = Math.floor(Math.random() * colors.length);
  return colors[radnom];
}

function generateRandomColors(nums) {
  let arr = [];
  //repeat nums times 
  for(let i = 0; i < nums; i++){
    //random colors to arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  // pick r g b 0-255 
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //"rgb(" + r + "," + " " + g + "," + " " + b")";
  return `rgb(${r}, ${g}, ${b})`;
}

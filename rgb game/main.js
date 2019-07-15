
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
    
function init(){
  
  setUpModeBtns();
  setUpSquares();
  btnsReset();
}

function setUpSquares(){
  // modeBtns event lister
  for(let x = 0; x < modeBtns.length; x++){
    
    modeBtns[x].addEventListener('click', function(){
    modeBtns[0].classList.remove("active-btn");
    modeBtns[1].classList.remove("active-btn");
    this.classList.add("active-btn");
    //ternary operator
    this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
    btnsReset();  
    });
  }
}

function setUpModeBtns(){
  for(let i=0; i<squares.length; i++){
    // add events to sqrs
    squares[i].addEventListener('click', function(){
      //grab color
      let clickedColor = this.style.backgroundColor;
      //compare
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeAllSquares(pickedColor);
        h1Background.style.backgroundColor = pickedColor;
        btnNew.textContent = "TRY AGAIN";
      }
      else if(this.style.backgroundColor !== "rgb(35, 35, 35)"){
          messageDisplay.textContent = " TRY AGAIN-" + this.style.backgroundColor;
          this.style.backgroundColor = "rgb(35, 35, 35)";
      }
    });
  }
}


function btnsReset(){
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
  for(let i=0; i<squares.length; i++){
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //change btn text
  if(btnNew.textContent === "TRY AGAIN"){
    btnNew.textContent = "NEW";
  };
}
  
/*
//forEach to do
modeBtns.forEach((modeBTN)=> {
modeBTN.addEventListener('click', function(){
    this.classList.add("active-btn");
    colors = generateRandomColors(numSquares);
  });
});*/    

// button HARD
/*
btnHard.addEventListener('click', function(){
  btnEasy.classList.remove("active-btn");
  btnHard.classList.add("active-btn");
  numSquares = 6;
  colors = generateRandomColors(numSquares); 
  pickedColor = choseColor();
  colorDisplay.textContent = pickedColor;
  for(var i =0; i<squares.length;i++){   
      squares[i].style.backgroundColor =colors[i];
      squares[i].style.display = "block";
  }
  messageDisplay.textContent ='';
  h1Background.style.backgroundColor = "rgb(70, 130, 180)";
});

    // button EASY
btnEasy.addEventListener('click', function(){
  btnHard.classList.remove("active-btn");
  btnEasy.classList.add("active-btn");
  numSquares = 3;
  colors = generateRandomColors(numSquares); 
  pickedColor = choseColor();
  colorDisplay.textContent = pickedColor;
  for(var i =0; i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor =colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent ='';
  h1Background.style.backgroundColor = "rgb(70, 130, 180)";  
});
*/

//NEW btn
btnNew.addEventListener('click', function() {
  btnsReset()
});

//colorDisplay.textContent = pickedColor; 

//win change tiles 
function changeAllSquares(color) {
  //loop through sqrs
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
  }
}
//randomize winner
function choseColor() {
  let radnom = Math.floor(Math.random() * colors.length);
  return colors[radnom];
}

function generateRandomColors(num) {
  //make arr
  let arr = [];
  //repeat num times 
  for(var i = 0; i< num; i++){
    //random colors to arr
    arr.push(randomColor());
  }
  return arr;
  //return that arr
}


function randomColor(){
  // pick r g b 0-255 
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //"rgb(" + r + "," + " " + g + "," + " " + b")";
  return `rgb(${r}, ${g}, ${b})`;
}

var numberOfMusicButton = document.querySelectorAll(".btn").length;


for (var i = 0; 1 < numberOfMusicButton; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    buttonAnimation2(buttonInnerHTML)

  })
}


function makeSound(key){
  switch (key) {
    case "a":
      var a = new Audio ("music/tom-1.mp3");
      a.play();
      break;

    case "b":
      var b = new Audio("music/tom-3.mp3");
      b.play();
      break;

    case "c":
      var c = new Audio("music/snare.mp3");
      c.play();
      break;

    case "d":
      var d = new Audio("music/crash.mp3");
      d.play();
      break;
    default:

  }
}


function buttonAnimation(currentButton){
  var activeButton = document.querySelector(".h");
  activeButton.classList.add("light");

  setTimeout(function(){
    activeButton.classList.remove("light");
  }, 200);
}

function buttonAnimation2(background){
  var activeButton2 = document.querySelector(".first-container");

  activeButton2.classList.add("darkness");

  setTimeout(function(){
    activeButton2.classList.remove("darkness");
  }, 200);
}

var food = 0;
var wood = 0;
var stone = 0;
var worker = 0;

var clickCount = 0;

window.onload = function() {

  consoleMessage();


  var foodButton = document.getElementById('food');
  var woodButton = document.getElementById('wood');
  var stoneButton = document.getElementById('stone');

  var spawnButton = document.getElementById('worker');

  foodButton.addEventListener("click", function() {
    increment(this.id);
  });
  woodButton.addEventListener("click", function() {
    increment(this.id);
  });
  stoneButton.addEventListener("click", function() {
    increment(this.id);
  });

  spawnButton.addEventListener("click", function() {
    spawn(this.id);
  });

  function increment(resource) {
    clickCount++;

    window[resource]++;
    document.getElementById(resource + "_count").innerHTML = window[resource];
  }

  function spawn(resource){
    clickCount++;

    if(food >= 10){
      window[resource]++;
      document.getElementById(resource + "_count").innerHTML = window[resource];
      food = food -10;
      document.getElementById("food_count").innerHTML = food;
    }

  }

  function consoleMessage(){
    console.log("Hello!");
  }

};

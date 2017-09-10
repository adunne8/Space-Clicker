var food = 0;
var wood = 0;
var stone = 0;

var clickCount = 0;

window.onload = function() {


  var foodButton = document.getElementById('food');
  var woodButton = document.getElementById('wood');
  var stoneButton = document.getElementById('stone');

  foodButton.addEventListener("click", function() {
    increment(this.id);
  });
  woodButton.addEventListener("click", function() {
    increment(this.id);
  });
  stoneButton.addEventListener("click", function() {
    increment(this.id);
  });

  function increment(resource) {
    clickCount++;

    window[resource]++;
    document.getElementById(resource + "_count").innerHTML = window[resource];

    console.log(resource);
    console.log(food);
    console.log(resource + clickCount);

  }

};

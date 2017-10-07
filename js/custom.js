


//DEBUG LOOP FUNCTION
window.setInterval(myCallback, 1000);
var i = 0;
function myCallback(){

  console.log("log: " + i);
  i++;
}
//INITIALIZE VARIABLES

//RESOURCES
var food = {
	name:'food',
	total:0,
	increment:1
};
var wood = {
  name: 'wood',
  total: 0,
  increment: 1
};
var stone = {
  name: 'stone',
  total: 0,
  increment: 1
};
var worker = 0;



var clickCount = 0;

window.onload = function() {




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
    console.log(resource);
    var res = window[resource];
    console.log(res.total);

    res.total++;
    document.getElementById(resource + "_count").innerHTML = res.total;
  }

  function spawn(resource){
    clickCount++;

    //VALID WORKER GENERATION
    if(food.total >= 10){
      //ITERATE AND DISPLAY VALUE
      window[resource]++;
      document.getElementById(resource + "_count").innerHTML = window[resource];
      //REDUCE FOOD AND DISPLAY
      food.total = food.total -10;
      document.getElementById("food_count").innerHTML = food.total;
      document.getElementById(resource + "_message").style.visibility = "hidden";
    }
    //INVALID WORKER GENERATION
    else{
      document.getElementById(resource + "_message").style.visibility = "visible";
    }

  }



};

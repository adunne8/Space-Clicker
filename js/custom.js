


//DEBUG LOOP FUNCTION


//INITIALIZE VARIABLES

//RESOURCES
var food = {
	name:'food',
	total:0,
	increment:0
};
var wood = {
  name: 'wood',
  total: 0,
  increment: 0
};
var stone = {
  name: 'stone',
  total: 0,
  increment: 0
};
var population = {
  name: 'population',
  total: 0,
  unemployed: 0,
  farmer: 0,
  woodcutter: 0,
  stonecutter: 0
};
var clickCount = 0;

window.onload = function() {
  window.setInterval(myCallback, 1000);
  function myCallback(){
    autoResourceGeneration();
    showValues();
		showIncrements();
  };

  var foodButton = document.getElementById('food');
  var woodButton = document.getElementById('wood');
  var stoneButton = document.getElementById('stone');

  var spawnButton = document.getElementById('population');
  var farmerButton = document.getElementById('farmer');
  var woodcutterButton = document.getElementById('woodcutter');
  var stonecutterButton = document.getElementById('stonecutter');

  //GENERATING RESOURCES
  foodButton.addEventListener("click", function() {
    increment(this.id);
  });
  woodButton.addEventListener("click", function() {
    increment(this.id);
  });
  stoneButton.addEventListener("click", function() {
    increment(this.id);
  });
  //GENERATE AND ASSIGN WORKERS
  spawnButton.addEventListener("click", function() {
    spawn(this.id);
  });
  farmerButton.addEventListener("click", function(){
    assignWorker(this.id);
  });
  woodcutterButton.addEventListener("click", function(){
    assignWorker(this.id);
  });
  stonecutterButton.addEventListener("click", function(){
    assignWorker(this.id);
  });

  function increment(resource) {
    clickCount++;
    //console.log(resource);
    var res = window[resource];
    //console.log(res.total);

    res.total++;
    document.getElementById(resource + "_count").innerHTML = res.total;
  }

  function spawn(resource){
    clickCount++;

    //VALID WORKER GENERATION
    if(food.total >= 10){
      //ITERATE AND DISPLAY VALUE
      population.total++;
      population.unemployed++;
      food.increment = food.increment -.9;

      //REDUCE FOOD AND DISPLAY
      food.total = Math.floor((food.total -10)*10)/10;

      document.getElementById(resource + "_message").style.visibility = "hidden";
    }
    //INVALID WORKER GENERATION
    else{
      document.getElementById(resource + "_message").style.visibility = "visible";
    }
    showValues();
    showPopulation();

  };

  function assignWorker(type){
    if (population.unemployed > 0){
      population.unemployed--;

      if(type == "farmer"){
        population.farmer++;
        food.increment++;
        document.getElementById("farmer_count").innerHTML = population.farmer;
      }
      else if(type == "woodcutter"){
        population.woodcutter++;
        wood.increment++;
        document.getElementById("woodcutter_count").innerHTML = population.woodcutter;
      }
      else{
        population.stonecutter++;
        stone.increment++;
        document.getElementById("stonecutter_count").innerHTML = population.stonecutter;
      };

    };
    showPopulation();

  };

  function autoResourceGeneration(){
    food.total = Math.round((food.total + food.increment)*10)/10;
    wood.total = wood.total + wood.increment;
    stone.total = stone.total + stone.increment;
  };
  function showValues(){
    document.getElementById("food_count").innerHTML = food.total;
    document.getElementById("wood_count").innerHTML = wood.total;
    document.getElementById("stone_count").innerHTML = stone.total;
  };
  function showPopulation(){
    document.getElementById("population_count").innerHTML = population.total;
    document.getElementById("unemployed_count").innerHTML = population.unemployed;
    document.getElementById("farmer_count").innerHTML = population.farmer;
    document.getElementById("woodcutter_count").innerHTML = population.woodcutter;
    document.getElementById("stonecutter_count").innerHTML = population.stonecutter;
  };
	function showIncrements(){
		document.getElementById("food_increment").innerHTML = food.increment;
	}

};

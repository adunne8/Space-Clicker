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

	//CODE TO BE RUN EACH SECOND
  window.setInterval(myCallback, 1000);
  function myCallback(){
    autoResourceGeneration();
    showValues();
		showIncrements();
  };

	//ASSIGN VARIABLES TO BUTTONS
  var foodButton = document.getElementById('food');
  var woodButton = document.getElementById('wood');
  var stoneButton = document.getElementById('stone');

  var spawnButton = document.getElementById('population');
  var farmerButton = document.getElementById('farmer');
  var woodcutterButton = document.getElementById('woodcutter');
  var stonecutterButton = document.getElementById('stonecutter');

	//ASSIGN CLASS ELEMENTS TO ARRAY
	var spawnErrorMessages = document.getElementsByClassName("spawnerror");
	var allErrorMessages = document.getElementsByClassName("errormessage");
	var assignWorkerButtons = document.getElementsByClassName("assignworker");

	//INITIAL CODE CALLS
	updateButtonStatus();

  //ASSIGN ONCLICK EVENTS TO BUTTONS
  foodButton.addEventListener("click", function() {
    increment(this.id);
  });
  woodButton.addEventListener("click", function() {
    increment(this.id);
  });
  stoneButton.addEventListener("click", function() {
    increment(this.id);
  });
  //GENERATE AND ASSIGN POPULATION
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

	//MANUALLY GENERATE RESOURCE
  function increment(resource) {
    clickCount++;
    window[resource].total++;
    showValues();
		updateButtonStatus();
  }

  function spawn(){
    //VALID WORKER GENERATION
    if(food.total >= 10){
      //ITERATE AND DISPLAY VALUE
      population.total++;
      population.unemployed++;
      food.increment--;

      //REDUCE FOOD AND DISPLAY
      food.total = food.total -10;

      document.getElementById("worker_message").style.visibility = "hidden";
    }
    //INVALID WORKER GENERATION
    else{
      document.getElementById("worker_message").style.visibility = "visible";
    };
    showValues();
    showPopulation();
		showIncrements();
		updateButtonStatus();
  };

  function assignWorker(type){
    if (population.unemployed > 0){
      population.unemployed--;

      if(type == "farmer"){
        population.farmer++;
        food.increment = food.increment + 1.2;
      }
      else if(type == "woodcutter"){
        population.woodcutter++;
        wood.increment++;
      }
      else{
        population.stonecutter++;
        stone.increment++;
      };
			setErrorMessages("spawnerror", "hidden");

    }
		else {
				setErrorMessages(type, "visible");
		}
    showPopulation();
  };

	//TRIGGERED EACH SECOND
  function autoResourceGeneration(){
    food.total = food.total + food.increment;
    wood.total = wood.total + wood.increment;
    stone.total = stone.total + stone.increment;
		updateButtonStatus();
  };

	//SHOW RESOURCE TOTALS
  function showValues(){
    document.getElementById("food_count").innerHTML = Math.floor(food.total * 10)/10;
    document.getElementById("wood_count").innerHTML = Math.floor(wood.total * 10)/10;
    document.getElementById("stone_count").innerHTML = Math.floor(stone.total * 10)/10;
  };
	//SHOW POPULATION BREAKDOWNS
  function showPopulation(){
    document.getElementById("population_count").innerHTML = population.total;
    document.getElementById("unemployed_count").innerHTML = population.unemployed;
    document.getElementById("farmer_count").innerHTML = population.farmer;
    document.getElementById("woodcutter_count").innerHTML = population.woodcutter;
    document.getElementById("stonecutter_count").innerHTML = population.stonecutter;
  };

	//TO ADD CODE TO DISABLE BUTTONS BASED ON VALUES
	function updateButtonStatus(){
		//GENERATE WORKEER BUTTON STATUS
		if(food.total < 10){
			document.getElementById("population").disabled = true;
		}
		else{
			document.getElementById("population").disabled = false;
		};

		//ASSIGN WORKER BUTTONS STATUS
		for (i = 0; i < assignWorkerButtons.length; i++){
			if (population.unemployed == 0){
				assignWorkerButtons[i].disabled = true;
			}
			else{
				assignWorkerButtons[i].disabled = false;
			};
		};

	};

	//SHOW AUTO INCREMENT VALUES
	function showIncrements(){
		//SET RESOURCE VARIABLES
		var foodInc = document.getElementById("food_increment");
		var woodInc = document.getElementById("wood_increment");
		var stoneInc = document.getElementById("stone_increment");

		//DISPLAY RESOURCE INCREMENTS
		foodInc.innerHTML = Math.round(food.increment*100)/100;
		woodInc.innerHTML = Math.round(wood.increment*100)/100;
		stoneInc.innerHTML = Math.round(stone.increment*100)/100;

		//SET COLOR IF NEGITIVE
		if(food.increment < 0){
			foodInc.classList.add("negativeInc");
		}
		else{
			foodInc.classList.remove("negativeInc");
		};
		if(wood.increment < 0){
			woodInc.classList.add("negativeInc");
		}
		else{
			woodInc.classList.remove("negativeInc");
		};
		if(stone.increment < 0){
			stoneInc.classList.add("negativeInc");
		}
		else{
			stoneInc.classList.remove("negativeInc");
		};


	};

	//SHOW OR HIDE BLOCKS OF MESSAGES
	function setErrorMessages(group, visibility){
		//HIDE ALL CURRENTLY DISPLAYED ERROR MESSAGES
		for (j = 0; j < allErrorMessages.length; j++){
			allErrorMessages[j].style.visibility = "hidden";
		}
		//IF A GROUP OF ERROR MESSAGES
		if (group == "spawnerror"){
			for (i = 0; i < spawnErrorMessages.length; i++){
				spawnErrorMessages[i].style.visibility = visibility;
			}
		}
		//IF NOT A GROUP SET INDIVIDUAL MESSAGE DISPLAY = VISIBLE
		else{
			document.getElementById(group + "_message").style.visibility = visibility;
		};

	};



};

function genJob() {
  randomValue = Math.floor(Math.random() * 6);
  if (randomValue == 0) {
    job = "Warrior"
  } else if (randomValue == 1) {
    job = "Thief"
  } else if (randomValue == 2) {
    job = "Monk"
  } else if (randomValue == 3) {
    job = "White Mage"
  } else if (randomValue == 4) {
    job = "Red Mage"
  } else {
    job = "Black Mage"
  }
  return job;
}

function gen() {
    party1 = genJob();
    party2 = genJob();
    party3 = genJob();
    party4 = genJob();


    var x = document.createElement("IMG");
    x.setAttribute("src", "img/"+randomValue+".png");
    document.body.appendChild(x);
  
    document.getElementById("party1").innerHTML = party1 + ",";
    document.getElementById("party2").innerHTML = party2 + ",";;
    document.getElementById("party3").innerHTML = party3 + ",";;
    document.getElementById("party4").innerHTML = party4 + ".";;
    return(0);
}